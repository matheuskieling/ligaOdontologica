import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hero-desktop',
  templateUrl: './hero-desktop.component.html',
  styleUrls: ['./hero-desktop.component.scss']
})
export class HeroDesktopComponent {
  @Output() clickWhatsApp: EventEmitter<any> = new EventEmitter();


  handleSendWppMessage() {
    this.clickWhatsApp.emit();
  }
}
