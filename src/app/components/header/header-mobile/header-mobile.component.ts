import { Component, ElementRef, ViewChild, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { WhatsAppService } from 'src/app/shared/services/whats-app.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.scss']
})
export class HeaderMobileComponent {

  menuIsOpened = false;
  @ViewChild('menu', { static: false }) menuElement!: ElementRef;
  @ViewChild('menuButton', { static: false }) menuButtonElement!: ElementRef;

  constructor(
    private whatsAppService: WhatsAppService,
    private router: Router
  ) {}

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;
    console.log(target.id)
    if (this.menuIsOpened && this.menuElement && !this.menuButtonElement) {
      if (!this.menuElement.nativeElement.contains(target) && target.id !== 'menuButton') {
        this.menuIsOpened = false;
      }
    }
  }

  toggleMenu() {
    this.menuIsOpened = !this.menuIsOpened;
  }

  routerNav(page: string) {
    this.router.navigate([page]);
  }

  handleSendWppMessage() {
    const message = "Olá, gostaria de informações sobre agendamento de consulta com a clínica Liga Odontológica";
    this.whatsAppService.openWhatsAppWithMessage(environment.phoneNumber, message);
  }
}
