import { AfterViewInit, Component, HostListener, Input, OnInit, ViewChild } from '@angular/core';

const MOBILE_VIEW = 798;
const CARD_MOBILE_VIEW = 415;

interface Card {
  id: number,
  policyTitle: string,
  policyText: string,
  text: string,
  price: number,
  imagePath: string
}

@Component({
  selector: 'app-plan-builder-cards-list',
  templateUrl: './plan-builder-cards-list.component.html',
  styleUrls: ['./plan-builder-cards-list.component.scss']
})

export class PlanBuilderCardsListComponent implements OnInit, AfterViewInit {
  @Input() currency: string;
  @Input() selectedCards: number[];
  @Input() period: string;
  @Input() cards: Card[];

  isMobileForContainer: boolean;
  isMobileForCard: boolean;

  @ViewChild('container') container;

  addToSelected(id: number) {
    const isSelected = this.selectedCards.includes(id);
    if (isSelected) {
      this.selectedCards = this.selectedCards.filter(card => card !== id);
    } else {
      this.selectedCards = [...this.selectedCards, id];
    }
  }

  setIsMobile() {
    this.isMobileForContainer = this.container.nativeElement.clientWidth < MOBILE_VIEW;
    this.isMobileForCard = this.container.nativeElement.clientWidth < CARD_MOBILE_VIEW;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.setIsMobile();
  }

  detectIfSelected(id: number) {
    return this.selectedCards.includes(id);
  }

  ngAfterViewInit() {
    this.setIsMobile();
  }

  ngOnInit(): void {}
}
