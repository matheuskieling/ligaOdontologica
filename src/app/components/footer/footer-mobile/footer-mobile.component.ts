import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WhatsAppService } from 'src/app/shared/services/whats-app.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-footer-mobile',
  templateUrl: './footer-mobile.component.html',
  styleUrls: ['./footer-mobile.component.scss']
})
export class FooterMobileComponent {
  constructor(
    private whatsAppService: WhatsAppService,
    private router: Router
  ) {}

  handleSendWppMessage() {
    let message = "Olá, gostaria de informações sobre agendamento de consulta com a clínica Liga Odontológica"
    this.whatsAppService.openWhatsAppWithMessage(environment.phoneNumber, message)
  }

  routerNav(page: string) {
    this.router.navigate([page])
  }
}
