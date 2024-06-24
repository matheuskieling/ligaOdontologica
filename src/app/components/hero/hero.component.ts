import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WhatsAppService } from 'src/app/shared/services/whats-app.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  @Input() isMobile!: boolean

  constructor(
    private whatsAppService: WhatsAppService
  ) {}


  ngOnInit() {
    console.log(this.isMobile)
  }

  handleSendWppMessage() {
    let message = "Olá, gostaria de informações sobre agendamento de consulta com a clínica Liga Odontológica"
    this.whatsAppService.openWhatsAppWithMessage(environment.phoneNumber, message);
  }
}
