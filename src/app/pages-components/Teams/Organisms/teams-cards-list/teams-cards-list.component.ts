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

const MOBILE_VIEW = 525;

interface User {
  tip: {
    title: string,
    text: string
  },
  name: string,
  text: string,
  position: string,
  id: string | number
}

@Component({
  selector: 'app-teams-cards-list',
  templateUrl: './teams-cards-list.component.html',
  styleUrls: ['./teams-cards-list.component.scss']
})

export class TeamsCardsListComponent implements OnInit {
  @Input() initialList: User[];
  @Input() selected: string[];
  @Input() initialUsersList: User[];

  @ViewChild('deleteModalContent')deleteModalContent: ElementRef;
  @ViewChild('editModalContent')editModalContent: ElementRef;
  @ViewChild('addModalContent')addModalContent: ElementRef;
  @ViewChild('containerList') container: ElementRef;

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.users, event.previousIndex, event.currentIndex);
  }
  
  users = [];
  isModalVisible = false;
  query = '';
  newUserName = '';
  newUserText = '';
  newUserPosition = '';
  activeTitle = '';
  activeId='';
  modalTitle='';
  modalPrimaryButtonTitle = '';
  modalDangerButtonTitle = '';
  modalPrimaryButtonFunction=(args: any) => {};
  modalDangerButtonFunction=(args: any) => {};
  modalComponent;
  ctx;
  isMobile;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isMobile = this.container.nativeElement.clientWidth <= MOBILE_VIEW;
    console.log(this.isMobile, 'container width:', this.container.nativeElement.clientWidth, 'mobile width:',MOBILE_VIEW)
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
    this.setModalVariables('Delete user', '', 'delete', this.closeModal, this.deleteUser, this.deleteModalContent, true);
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
    this.setModalVariables( 'Delete users', '', 'delete', this.closeModal, this.deleteSelectedusers, this.deleteModalContent, true);
  }

  deleteSelectedusers() {
    this.users = this.users.filter(user => {
      if(!this.selected.includes(user.id)) {
        return user
      }
    })
    this.selected = [];
    this.isModalVisible = false;
  }

  handleEdit(id: string) {
    this.activeTitle =this.users.find(user => user.id === id).name;
    this.activeId = id;
    this.ctx = { initialValue: this.activeTitle };
    this.setModalVariables('Rename user', 'rename', '', this.editUser, null, this.editModalContent, true);
  }

  editUser() {
    const activeIndex = this.users.findIndex(user => user.id === this.activeId);
    this.users[activeIndex].name = this.activeTitle;
    this.isModalVisible = false;
  }

  handleAdd() {
    this.ctx = { initialValue: '' };
    this.setModalVariables('Add user', 'add', '', this.addUser, null, this.addModalContent, true);
  }

  addUser() {
    let newUserTip;
    switch (this.newUserPosition) {
      case 'Account owner': 
        newUserTip = { title: 'Account owner', text: 'Has access to all domains and all settings.' };
        break;
      case 'Account manager':
        newUserTip = { title: 'Account manager', text: 'Has access to some domains and some settings.' };
        break;
      case 'Account user': 
        newUserTip = { title: 'Account user', text: 'Has no access to all domains and all settings.' };
        break;
    }
  
    const newUser = {
      id: `${Date.now()}`, 
      name: this.newUserName, 
      text: this.newUserText,
      tip: newUserTip,
      position: this.newUserPosition
    }
    console.log(newUser)

    this.users = [...this.users, newUser];
    this.isModalVisible = false;
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
    this.isModalVisible = false;
  }

  setValue(value: string, type: string) {
    switch(type) {
      case 'editTitle':
        this.activeTitle = value;
      case 'addTitle':
        this.newUserName = value;
      case 'addText':
        this.newUserText = value;
      case 'addPosition':
        this.newUserPosition = value;
    }
  }

  duplicateUser(id: string) {
    const index = this.users.findIndex(user => user.id === id);
    const userToDuplicate = this.users[index];
    const newUser = {
      id: `${Date.now()}`, 
      name: userToDuplicate.name, 
      text: userToDuplicate.text,
      position: userToDuplicate.position,
      tip: { ...userToDuplicate.tip }
    }

    this.users.splice(index, 0, newUser);
  }

  handleFilter = debounce(function(...args) {
    this.query = args[0].toLowerCase();
  }, 500, false)


  ngAfterViewInit() {
    this.isMobile = this.container.nativeElement.clientWidth <= MOBILE_VIEW;
  }

  ngOnInit() {
    this.users = this.initialUsersList;
  }
}
