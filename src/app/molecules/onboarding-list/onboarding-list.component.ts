import { Component, ComponentFactoryResolver, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { domain } from 'process';

interface Domain {
  title: string,
  text: string,
  id: string
}

@Component({
  selector: 'app-onboarding-list',
  templateUrl: './onboarding-list.component.html',
  styleUrls: ['./onboarding-list.component.scss']
})

export class OnboardingListComponent {
  @Input() domains: Domain[];
  @Input() selected: string[];

  @ViewChild('deleteModalContent')deleteModalContent: ElementRef;
  @ViewChild('editModalContent')editModalContent: ElementRef;

  isModalVisible=false;
  activeTitle = '';
  activeId='';
  modalTitle='';
  modalPrimaryButtonTitle='';
  modalDangerButtonTitle='';
  modalPrimaryButtonFunction=(args: any) => {};
  modalDangerButtonFunction=(args: any) => {};
  modalComponent;
  ctx;

  changeSelectedList = (id: string) => {
    this.selected = (this.selected.includes(id)) ? this.selected.filter(domain => domain !== id) : [...this.selected, id];
  }

  checkIsSelected(id: string) {
    return this.selected.includes(id);
  }

  handleDelete(id: string) {
    this.activeTitle =this.domains.find(domain => domain.id === id).title;
    this.ctx = { titleActiveDomain: this.activeTitle };
    this.modalTitle = 'Delete domain';
    this.modalPrimaryButtonTitle = 'exit';
    this.modalDangerButtonTitle = 'delete';
    this.modalPrimaryButtonFunction = this.closeModal;
    this.modalDangerButtonFunction = this.deleteDomain;
    this.activeId = id;
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

  closeModal() {
    this.isModalVisible = false;
  }

  setValue(value: string) {
    this.activeTitle = value;
  }

  editDomain() {
    const activeIndex = this.domains.findIndex(domain => domain.id === this.activeId);
    this.domains[activeIndex].title = this.activeTitle;
    this.isModalVisible = false;
  }

  deleteDomain() {
    this.domains = this.domains.filter(domain => domain.id !== this.activeId);
    this.isModalVisible = false;
  }
}
