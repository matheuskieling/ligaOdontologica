import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hero-mobile',
  templateUrl: './hero-mobile.component.html',
  styleUrls: ['./hero-mobile.component.scss']
})
export class HeroMobileComponent {
  @Output() clickWhatsApp: EventEmitter<any> = new EventEmitter();


  handleSendWppMessage() {
    this.clickWhatsApp.emit();
  }
}
