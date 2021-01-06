import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { debounce } from './helpers';

interface Domain {
  title: string,
  text: string,
  id: string
}

const MOBILE_VIEW = 574;
const SMALL_MOBILE_VIEW = 400;

@Component({
  selector: 'app-onboarding-list',
  templateUrl: './onboarding-list.component.html',
  styleUrls: ['./onboarding-list.component.scss'],
})

export class DomainsOnboardingListComponent implements OnInit {
  @Input() initialDomainsList: Domain[];
  @Input() selected: string[];

  @ViewChild('deleteModalContent')deleteModalContent: ElementRef;
  @ViewChild('editModalContent')editModalContent: ElementRef;
  @ViewChild('addModalContent')addModalContent: ElementRef;
  @ViewChild('container') container: ElementRef;

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.domains, event.previousIndex, event.currentIndex);
  }
  
  domains = [];
  isModalVisible=false;
  query = '';
  newDomainTitle = '';
  newDomainText = '';
  activeTitle = '';
  activeId='';
  modalTitle='';
  modalPrimaryButtonTitle='';
  modalDangerButtonTitle='';
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
    this.selected = this.selected.length === this.domains.length
      ? []
      : this.domains.map(domain => domain.id)
  }

  changeSelectedList = (id: string) => {
    this.selected = (this.selected.includes(id)) ? this.selected.filter(domain => domain !== id) : [...this.selected, id];
  }

  checkIsSelected(id: string) {
    return this.selected.includes(id);
  }

  /// show modal with props

  handleDelete(id: string) {
    this.activeTitle = this.domains.find(domain => domain.id === id).title;
    this.ctx = { titleActiveDomain: this.activeTitle };
    this.activeId = id;
    this.setModalVariables('Delete domain', '', 'delete', this.closeModal, this.deleteDomain, this.deleteModalContent, true);
  }

  deleteDomain() {
    this.domains = this.domains.filter(domain => domain.id !== this.activeId);
    this.isModalVisible = false;
    this.selected = this.selected.filter(domain => domain !== this.activeId);
  }

  handleDeleteSeveral() {
    this.activeTitle = this.domains
      .filter(domain => this.selected.includes(domain.id))
      .map(domain => domain.title).join(', ');
    this.ctx = { titleActiveDomain: this.activeTitle };
    this.setModalVariables( 'Delete domains', '', 'delete', this.closeModal, this.deleteSelectedDomains, this.deleteModalContent, true);
  }

  deleteSelectedDomains() {
    this.domains = this.domains.filter(domain => {
      if(!this.selected.includes(domain.id)) {
        return domain
      }
    })
    this.selected = [];
    this.isModalVisible = false;
  }

  handleEdit(id: string) {
    this.activeTitle =this.domains.find(domain => domain.id === id).title;
    this.activeId = id;
    this.ctx = { initialValue: this.activeTitle };
    this.setModalVariables('Rename domain', 'rename', '', this.editDomain, null, this.editModalContent, true);
  }

  editDomain() {
    const activeIndex = this.domains.findIndex(domain => domain.id === this.activeId);
    this.domains[activeIndex].title = this.activeTitle;
    this.isModalVisible = false;
  }

  handleAdd() {
    this.ctx = { initialValue: '' };
    this.setModalVariables('Add domain', 'add', '', this.addDomain, null, this.addModalContent, true);
  }

  addDomain() {
    const newDomain = {
      id: `${Date.now()}`, 
      title: this.newDomainTitle, 
      text: this.newDomainText
    }
    this.domains = [...this.domains, newDomain];
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
        this.newDomainTitle = value;
      case 'addText':
        this.newDomainText = value;
    }
  }

  duplicateDomain(id: string) {
    const index = this.domains.findIndex(domain => domain.id === id);
    const domainToDuplicate = this.domains[index];
    const newDomain = {
      id: `${Date.now()}`, 
      title: domainToDuplicate.title, 
      text: domainToDuplicate.text
    }

    this.domains.splice(index, 0, newDomain);
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
    this.domains = this.initialDomainsList;
  }
}
