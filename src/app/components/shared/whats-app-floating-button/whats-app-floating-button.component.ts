import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WhatsAppService } from 'src/app/shared/services/whats-app.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-whats-app-floating-button',
  templateUrl: './whats-app-floating-button.component.html',
  styleUrls: ['./whats-app-floating-button.component.scss']
})
export class WhatsAppFloatingButtonComponent {

  constructor(
    private whatsAppService: WhatsAppService
  ) {

  }

  @Input() isOpened = false;
  @Output() toggleOpenEvent: EventEmitter<any> = new EventEmitter();

  toggleOpen() {
    this.toggleOpenEvent.emit();
  }

  clickOption(message: string) {
    this.whatsAppService.openWhatsAppWithMessage(environment.phoneNumber, message)
  }
}
