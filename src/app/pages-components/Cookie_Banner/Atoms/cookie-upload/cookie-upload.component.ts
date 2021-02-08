import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cookie-upload',
  templateUrl: './cookie-upload.component.html',
  styleUrls: ['./cookie-upload.component.scss']
})
export class CookieUploadComponent implements OnInit {
  @Input() id: string;
  @Input() defaultSrc: string;

  imgSrc: string;

  @ViewChild('container') container: ElementRef;
  @ViewChild('container') img: ElementRef;
  
  onUpload(event) {
    var blob = new Blob([event.target.value]);
    const input =this.container.nativeElement.files[0]
    var fReader = new FileReader();
    fReader.readAsDataURL(input);
    const x = (val) => {
      this.imgSrc = val
    }
    fReader.onloadend = function(ev) {
      x(ev.target.result)
    }
  }

  ngOnInit(): void {
    this.imgSrc = this.defaultSrc
  }
}
