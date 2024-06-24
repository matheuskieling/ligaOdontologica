import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ResponsiveService } from 'src/app/shared/services/responsive.service';
import { WhatsAppService } from 'src/app/shared/services/whats-app.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header-desktop',
  templateUrl: './header-desktop.component.html',
  styleUrls: ['./header-desktop.component.scss']
})
export class HeaderDesktopComponent {

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
