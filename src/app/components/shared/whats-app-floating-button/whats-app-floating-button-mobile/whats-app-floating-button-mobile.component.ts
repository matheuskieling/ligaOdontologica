import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WhatsAppService } from 'src/app/shared/services/whats-app.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-whats-app-floating-button-mobile',
  templateUrl: './whats-app-floating-button-mobile.component.html',
  styleUrls: ['./whats-app-floating-button-mobile.component.scss']
})
export class WhatsAppFloatingButtonMobileComponent {
  @Output() toggleOpenEvent: EventEmitter<any> = new EventEmitter();
  @Input() isOpened!: boolean;

  constructor(private whatsAppService: WhatsAppService) {}


  toggleOpen() {
    this.toggleOpenEvent.emit();
  }

  clickOption(message: string) {
    this.whatsAppService.openWhatsAppWithMessage(environment.phoneNumber, message)
  }


}
