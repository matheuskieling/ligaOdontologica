import { Component, OnInit } from '@angular/core';
import { Especialidade } from 'src/app/shared/interfaces/especialidade-interface';
import { FotoConsultorio } from 'src/app/shared/interfaces/photo-interface';
import { EspecialidadeService } from 'src/app/shared/services/especialidade.service';
import { ImageService } from 'src/app/shared/services/images.service';
import { ResponsiveService } from 'src/app/shared/services/responsive.service';
import { WhatsAppService } from 'src/app/shared/services/whats-app.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cardsToShow: number = 4; // Static number of cards to show
  isWhatsOpened = false;
  fotosConsultorio: FotoConsultorio[] = [];
  visibleFotosConsultorio: FotoConsultorio[] = [];
  consultorioStartIndex: number = 0;
  isMobile: boolean = true;
  constructor(
    private whatsAppService: WhatsAppService,
    private imageService: ImageService,
    private responsiveService: ResponsiveService
  ) {
    window.addEventListener('click', (e: any) => {  
      if (!document.getElementById('whats')!.contains(e.target)){
        this.isWhatsOpened = false;
      }
    });
  }

  ngOnInit() {
    this.fotosConsultorio = this.imageService.getFotosConsultorio();
    this.updateVisibleFotosConsultorio();

    this.responsiveService.screenType$.subscribe(screenType => {
      this.isMobile = screenType == 'mobile'
      console.log(`Current screen type: ${screenType}`);
    });
  }

  updateVisibleFotosConsultorio() {
    const tempArray: FotoConsultorio[] = [];
    for (let i = 0; i < 3; i++) { // Display 3 photos at a time
      tempArray.push(
        this.fotosConsultorio[(this.consultorioStartIndex + i) % this.fotosConsultorio.length]
      );
    }
    
    this.visibleFotosConsultorio = [];
    
    setTimeout(() => {
      this.visibleFotosConsultorio = tempArray;
    }, 0);
  }
  
  nextConsultorio() {
    this.consultorioStartIndex = (this.consultorioStartIndex + 1) % this.fotosConsultorio.length;
    this.updateVisibleFotosConsultorio();
  }
  
  previousConsultorio() {
    this.consultorioStartIndex =
      (this.consultorioStartIndex - 1 + this.fotosConsultorio.length) % this.fotosConsultorio.length;
    this.updateVisibleFotosConsultorio();
  }
  

  getConsultorioImageClass(index: number): string {
    if (index === 0) {
      return 'image-left';
    } else if (index === 1) {
      return 'image-center';
    } else if (index === 2) {
      return 'image-right';
    }
    return '';
  }

  handleSendWppMessage() {
    let message = "Olá, gostaria de informações sobre agendamento de consulta com a clínica Liga Odontológica"
    this.whatsAppService.openWhatsAppWithMessage(environment.phoneNumber, message);
  }

  handleToggleOpen() {
    this.isWhatsOpened = !this.isWhatsOpened;
  }
}
