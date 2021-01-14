import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

const MOBILE_VIEW = 574;
const SMALL_MOBILE_VIEW = 400;

interface User {
  name: string,
  email: string,
  position: string,
  id: string | number
}

@Component({
  selector: 'app-teams-cards-list',
  templateUrl: './teams-cards-list.component.html',
  styleUrls: ['./teams-cards-list.component.scss']
})

export class TeamsCardsListComponent implements OnInit {
  @Input() selected: string[];
  @Input() initialUsersList: User[];

  @ViewChild('deleteModalContent')deleteModalContent: ElementRef;
  @ViewChild('editModalContent')editModalContent: ElementRef;
  @ViewChild('addModalContent')addModalContent: ElementRef;
  @ViewChild('containerList') container: ElementRef;

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.users, event.previousIndex, event.currentIndex);
  }
  
  positionsAndRights = {
      'Account owner': 'Has access to all domains and all settings.', 
      'Account manager': 'Has access to some domains and some settings.',
      'Account user': 'Has no access to all domains and all settings.'
    }
  positions = ['Account owner', 'Account manager', 'Account user']
  users = [];
  isModalVisible = false;
  query = '';
  newUserName = '';
  newUserEmail = '';
  newUserPosition = '';
  activeTitle = '';
  activeEmail = '';
  activePosition = '';
  activeId='';
  modalTitle='';
  modalPrimaryButtonTitle = '';
  modalDangerButtonTitle = '';
  modalPrimaryButtonFunction=(args: any) => {};
  modalDangerButtonFunction=(args: any) => {};
  modalComponent;
  ctx;
  isMobile;
  isSmallMobile;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.detectMobileView();
  }

  selectAll() {
    this.selected = this.selected.length === this.users.length
      ? []
      : this.users.map(user => user.id)
  }

  changeSelectedList = (id: string) => {
    this.selected = (this.selected.includes(id)) ? this.selected.filter(user => user !== id) : [...this.selected, id];
  }

  checkIsSelected(id: string) {
    return this.selected.includes(id);
  }

  /// show modal with props

  handleDelete(id: string) {
    this.activeTitle = this.users.find(user => user.id === id).name;
    this.ctx = { titleActiveUser: this.activeTitle };
    this.activeId = id;
    this.setModalVariables('Are you sure?', '', 'delete user', this.closeModal, this.deleteUser, this.deleteModalContent, true);
  }

  deleteUser() {
    this.users = this.users.filter(user => user.id !== this.activeId);
    this.isModalVisible = false;
    this.selected = this.selected.filter(user => user !== this.activeId);
  }

  handleDeleteSeveral() {
    this.activeTitle = this.users
      .filter(user => this.selected.includes(user.id))
      .map(user => user.name).join(', ');
      console.log(this.activeTitle)
    this.ctx = { titleActiveUser: this.activeTitle };
    this.setModalVariables( 'Are you sure?', '', 'delete users', this.closeModal, this.deleteSelectedusers, this.deleteModalContent, true);
  }

  deleteSelectedusers() {
    this.users = this.users.filter(user => {
      if(!this.selected.includes(user.id)) {
        return user
      }
    })
    this.selected = [];
    this.closeModal();
  }

  handleEdit(id: string) {
    const activeUser = this.users.find(user => user.id === id);
    this.activeTitle = activeUser.name;
    this.activeEmail = activeUser.email;
    this.activePosition = activeUser.position
    this.activeId = id;
    this.ctx = { initialValue: this.activeTitle };
    this.setModalVariables('Edit user', 'Save', 'Cancel', this.editUser, this.closeModal, this.editModalContent, true);
  }

  editUser() {
    const activeIndex = this.users.findIndex(user => user.id === this.activeId);
    this.users[activeIndex].name = this.activeTitle;
    this.users[activeIndex].email = this.activeEmail;
    this.users[activeIndex].position = this.activePosition;
    this.closeModal();
  }

  handleAdd() {
    this.ctx = { initialValue: '' };
    this.setModalVariables('Add user', 'add', 'cancel', this.addUser, this.closeModal, this.addModalContent, true);
  }

  addUser() {
    const newUser = {
      id: `${Date.now()}`, 
      name: this.newUserName, 
      email: this.newUserEmail,
      position: this.newUserPosition
    }

    this.users = [...this.users, newUser];
    this.closeModal()
  }


  setModalVariables(
    modalTitle, modalPrimaryButtonTitle, modalDangerButtonTitle, modalPrimaryButtonFunction,
    modalDangerButtonFunction, modalComponent, modalVisibility
  ) {
    this.modalTitle = modalTitle;
    this.modalPrimaryButtonTitle = modalPrimaryButtonTitle;
    this.modalDangerButtonTitle = modalDangerButtonTitle;
    this.modalPrimaryButtonFunction = modalPrimaryButtonFunction;
    this.modalDangerButtonFunction = modalDangerButtonFunction;
    this.modalComponent = modalComponent;
    this.isModalVisible = modalVisibility;
  }

  closeModal() {
    this.newUserEmail = '';
    this.newUserName = '';
    this.newUserPosition = '';
    this.activePosition = '';
    this.activeTitle = '';
    this.activeEmail = '';
    this.activeId = '';
    this.isModalVisible = false;
  }

  setValue(value: string, type: string) {
    switch(type) {
      case 'editTitle':
        this.activeTitle = value;
        break;
      case 'editEmail':
        this.activeEmail= value;
        break;
      case 'editPosition':
        this.activePosition = value;
        break;
      case 'addTitle':
        this.newUserName = value;
        break;
      case 'addEmail':
        this.newUserEmail = value;
        break;
      case 'addPosition':
        this.newUserPosition = value;
        break;
    }
  }

  duplicateUser(id: string) {
    const index = this.users.findIndex(user => user.id === id);
    const userToDuplicate = this.users[index];
    const newUser = {
      id: `${Date.now()}`, 
      name: userToDuplicate.name, 
      email: userToDuplicate.email,
      position: userToDuplicate.position,
    }

    this.users.splice(index, 0, newUser);
  }

  handleFilter = debounce(function(...args) {
    this.query = args[0].toLowerCase();
  }, 500, false)

  detectMobileView() {
    this.isMobile = this.container.nativeElement.clientWidth <= MOBILE_VIEW;
    this.isSmallMobile = this.container.nativeElement.clientWidth <= SMALL_MOBILE_VIEW;
  }

  ngAfterViewInit() {
    this.detectMobileView();
  }

  ngOnInit() {
    this.users = this.initialUsersList;
  }
}
