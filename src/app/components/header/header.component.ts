import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WhatsAppService } from 'src/app/shared/services/whats-app.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

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
