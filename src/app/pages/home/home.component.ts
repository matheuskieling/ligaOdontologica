import { Component, OnInit } from '@angular/core';
import { Especialidade } from 'src/app/shared/interfaces/especialidade-interface';
import { FotoConsultorio } from 'src/app/shared/interfaces/photo-interface';
import { EspecialidadeService } from 'src/app/shared/services/especialidade.service';
import { ImageService } from 'src/app/shared/services/images.service';
import { WhatsAppService } from 'src/app/shared/services/whats-app.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  especialidadeList: Especialidade[] = [];
  visibleEspecialidades: Especialidade[] = [];
  currentStartIndex: number = 0;
  cardsToShow: number = 4; // Static number of cards to show
  isWhatsOpened = false;
  fotosConsultorio: FotoConsultorio[] = [];
  visibleFotosConsultorio: FotoConsultorio[] = [];
  consultorioStartIndex: number = 0;

  constructor(
    private whatsAppService: WhatsAppService,
    private especialidadeService: EspecialidadeService,
    private imageService: ImageService
  ) {
    window.addEventListener('click', (e: any) => {  
      if (!document.getElementById('whats')!.contains(e.target)){
        this.isWhatsOpened = false;
      }
    });
  }

  ngOnInit() {
    this.especialidadeList = this.especialidadeService.getEspecialidades();
    this.updateVisibleEspecialidades();
    this.fotosConsultorio = this.imageService.getFotosConsultorio();
    this.updateVisibleFotosConsultorio();
  }

  updateVisibleEspecialidades() {
    this.visibleEspecialidades = [];
    for (let i = 0; i < this.cardsToShow; i++) {
      this.visibleEspecialidades.push(
        this.especialidadeList[(this.currentStartIndex + i) % this.especialidadeList.length]
      );
    }
  }

  next() {
    this.currentStartIndex = (this.currentStartIndex + this.cardsToShow) % this.especialidadeList.length;
    this.updateVisibleEspecialidades();
  }

  previous() {
    this.currentStartIndex =
      (this.currentStartIndex - this.cardsToShow + this.especialidadeList.length) % this.especialidadeList.length;
    this.updateVisibleEspecialidades();
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
