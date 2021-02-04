import { AfterViewInit, Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

interface TableItem {
  status: boolean,
  details: string,
  cycle: string,
  domains: number,
  unitPrice: number,
}

const MOBILE_VIEW = 800;
const SMALL_MOBILE_VIEW = 680;
const MONTHES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

@Component({
  selector: 'app-billing-payment',
  templateUrl: './billing-payment.component.html',
  styleUrls: ['./billing-payment.component.scss']
})

export class BillingPaymentComponent implements OnInit, AfterViewInit {
  @Input() tableData: TableItem[];

  lastNumbers: string = '0000';
  date: string = "**/**";
  name: string = 'Name'
  cardNumber: string = '';
  isMobile: boolean;
  isSmallMobile: boolean;
  monthes = MONTHES;
  totalSum: number;
  errors = {
    month: false,
    year: false,
    cvv: false,
    name: false,
    number: false
  }
  vat: number = 25;

  temporaryMonth = 'Month';
  temporaryYear = 'Year';
  temporaryCardNumber = new FormControl(this.cardNumber);
  temporaryCvv = new FormControl('');
  temporaryName = new FormControl(this.name);

  @ViewChild('container') container: ElementRef;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isMobile = this.container.nativeElement.clientWidth < MOBILE_VIEW;
    this.isSmallMobile = this.container.nativeElement.clientWidth < SMALL_MOBILE_VIEW;
  }

  setYear(value: number) {
    this.temporaryYear = value + '';
  }

  setMonth(value: string) {
    this.temporaryMonth = value;
  }

  setName(event) {
    const value = event.target.value;
    const index = value.length - 1;
    if (value[index].match(/[a-z]/i) && index < 20) {
      this.temporaryName.setValue(value);
    } else {
      this.temporaryName.setValue(value.substring(0, index));
    }
  }

  setCardNumber(event) {
    if (event.target.value.trim().length) {
      let value = event.target.value.split(" - ").join('');
      let splitedValue = value.match(new RegExp('.{1,4}', 'g')).join(" - ");
      const index = splitedValue.length - 1;
  
      if (+splitedValue[index]) {
        splitedValue = splitedValue.length > 25 ? splitedValue.substr(0, 25) : splitedValue;
        this.temporaryCardNumber.setValue(splitedValue);
      } else {
        this.temporaryCardNumber.setValue(splitedValue.substring(0, index));
      }
    } else {
      this.temporaryCardNumber.setValue('');
    }
  }

  setCvv(event) {
    const value = event.target.value;
    const index = value.length - 1;
    if (+value[index] && value.length < 4) {
      this.temporaryCvv.setValue(value);
    } else {
      this.temporaryCvv.setValue(value.substring(0, index));
    }
  }

  save() {
    let errorsNumbers = 0;
    const cardNumberJoined = this.temporaryCardNumber.value.split(" - ").join('');
    if (this.temporaryYear === 'Year') {
      this.errors.year = true;
      errorsNumbers++;
    }
    if (this.temporaryCvv.value.length < 3) {
      this.errors.cvv = true;
      errorsNumbers++;
    }
    if (this.temporaryMonth === 'Month') {
      this.errors.month = true;
      errorsNumbers++;
    }
    if (this.temporaryName.value.length < 5) {
      this.errors.name = true;
      errorsNumbers++;
    }
    if (cardNumberJoined.length < 16) {
      this.errors.number = true;
      errorsNumbers++;
    }
 
    if (errorsNumbers > 0) {
      return
    }
    const month = this.monthes.findIndex(item => item === this.temporaryMonth) + 1;
    const convertedMonth = month < 10 ? `0${month}` : `${month}`;
    const year = `${this.temporaryYear}`.substr(2, 4);
    this.date = `${convertedMonth}/${year}`;
    this.lastNumbers = cardNumberJoined.substr(12, 16);
    this.name = this.temporaryName.value;
  }

  validate(type: string) {
    switch(type) {
      case 'name':
        if (this.temporaryName.value.length < 5) {
          this.errors.name = true;
        }
        break;
      case 'number':
        const cardNumberJoined = this.temporaryCardNumber.value.split(" - ").join('');
        if (cardNumberJoined.length < 16) {
          this.errors.number = true;
        }
        break;
      case 'cvv':
        if (this.temporaryCvv.value.length < 3) {
          this.errors.cvv = true;
        }
        break;
      case 'month':
        if (this.temporaryMonth === 'Month') {
          this.errors.month = true;
        }
        break;
      case 'year':
        if (this.temporaryYear === 'Year') {
          this.errors.year = true;
        }
        break;
    }
  }

  validateOnPaste(value, type) {
    const patternNumbers  = /\d+/g;
    const patternLetters = /[a-z]+/gi;
    let matches;
    let filtered;
    switch (type) {
      case 'number':
        matches = value.match(patternNumbers);
        filtered = matches ? matches.join('') : '';
        this.temporaryCardNumber.setValue(filtered);
        break;
      case 'cvv':
        matches = value.match(patternNumbers);
        filtered = matches ? matches.join('') : '';
        filtered = filtered.length > 3 ? filtered.substr(0, 3) : filtered;
        this.temporaryCvv.setValue(filtered);
        break;
      case 'name': 
        matches = value.match(patternLetters);
        filtered = matches ? matches.join('') : '';
        filtered = filtered.length > 20 ? filtered.substr(0, 20) : filtered;
        this.temporaryName.setValue(filtered);
        break;
      default:
        return;
    }
  }

  deleteError (type: string) {
    this.errors[type] = false;
  }

  ngAfterViewInit() {
    this.isMobile = this.container.nativeElement.clientWidth < MOBILE_VIEW;
    this.isSmallMobile = this.container.nativeElement.clientWidth < SMALL_MOBILE_VIEW;
  }

  ngOnInit(): void {
    let sum = 0;
    this.tableData.forEach((value) => { sum = sum + value.unitPrice * value.domains });
    this.totalSum = sum;
  }
}