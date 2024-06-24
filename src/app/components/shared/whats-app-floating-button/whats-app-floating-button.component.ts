import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-whats-app-floating-button',
  templateUrl: './whats-app-floating-button.component.html',
  styleUrls: ['./whats-app-floating-button.component.scss']
})
export class WhatsAppFloatingButtonComponent {
  @Input() isMobile!: boolean;
  @Input() isOpened = false;
  @Output() toggleOpenEvent: EventEmitter<any> = new EventEmitter();

  toggleOpen() {
    this.toggleOpenEvent.emit();
  }
}
