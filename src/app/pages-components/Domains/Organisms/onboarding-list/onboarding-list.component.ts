import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

interface Domain {
  title: string,
  text: string,
  id: string
}

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

  domains = [];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.domains, event.previousIndex, event.currentIndex);
  }

  isModalVisible=false;
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

  handleDelete(id: string) {
    this.activeTitle = this.domains.find(domain => domain.id === id).title;
    this.ctx = { titleActiveDomain: this.activeTitle };
    this.modalTitle = 'Delete domain';
    this.modalPrimaryButtonTitle = '';
    this.modalDangerButtonTitle = 'delete';
    this.modalPrimaryButtonFunction = this.closeModal;
    this.modalDangerButtonFunction = this.deleteDomain;
    this.activeId = id;
    this.modalComponent = this.deleteModalContent;
    this.isModalVisible = true;
  }

  handleDeleteSeveral() {
    this.activeTitle = this.domains
      .filter(domain => {
        if(this.selected.includes(domain.id)) {
          return domain
        }
      })
      .map(domain => domain.title).join(', ')
    this.ctx = { titleActiveDomain: this.activeTitle };
    this.modalTitle = 'Delete domains';
    this.modalPrimaryButtonTitle = '';
    this.modalDangerButtonTitle = 'delete';
    this.modalPrimaryButtonFunction = this.closeModal;
    this.modalDangerButtonFunction = this.deleteSelectedDomains;
    this.modalComponent = this.deleteModalContent;
    this.isModalVisible = true;
  }

  handleEdit(id: string) {
    this.activeTitle =this.domains.find(domain => domain.id === id).title;
    this.ctx = { initialValue: this.activeTitle };
    this.modalTitle = 'Rename domain';
    this.modalPrimaryButtonTitle = 'rename';
    this.modalDangerButtonTitle = '';
    this.modalPrimaryButtonFunction = this.editDomain;
    this.modalDangerButtonFunction = null;
    this.activeId = id;
    this.modalComponent = this.editModalContent;
    this.isModalVisible = true;
  }

  handleAdd() {
    this.ctx = { initialValue: '' };
    this.modalTitle = 'Add domain';
    this.modalPrimaryButtonTitle = 'add';
    this.modalDangerButtonTitle = '';
    this.modalPrimaryButtonFunction = this.addDomain;
    this.modalDangerButtonFunction = null;
    this.modalComponent = this.addModalContent;
    this.isModalVisible = true;
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

  editDomain() {
    const activeIndex = this.domains.findIndex(domain => domain.id === this.activeId);
    this.domains[activeIndex].title = this.activeTitle;
    this.isModalVisible = false;
  }

  deleteDomain() {
    this.domains = this.domains.filter(domain => domain.id !== this.activeId);
    this.isModalVisible = false;
    this.selected = this.selected.filter(domain => domain !== this.activeId);
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

  addDomain() {
    const newDomain = {
      id: `${Date.now()}`, 
      title: this.newDomainTitle, 
      text: this.newDomainText
    }
    this.domains = [...this.domains, newDomain];
    this.isModalVisible = false;
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

  ngOnInit() {
    this.domains = this.initialDomainsList;
  }
}
