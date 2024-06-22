import { Component, OnInit } from '@angular/core';
import { Especialidade } from 'src/app/shared/interfaces/especialidade-interface';
import { EspecialidadeService } from 'src/app/shared/services/especialidade.service';
import { WhatsAppService } from 'src/app/shared/services/whats-app.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  especialidades: Especialidade[] = [];
  visibleEspecialidades: Especialidade[] = [];
  currentStartIndex: number = 0;
  cardsToShow: number = 4; // Static number of cards to show

  constructor(
    private whatsAppService: WhatsAppService,
    private especialidadeService: EspecialidadeService
  ) {}

  ngOnInit() {
    this.especialidades = this.especialidadeService.getEspecialidades();
    this.updateVisibleEspecialidades();
  }

  updateVisibleEspecialidades() {
    this.visibleEspecialidades = [];
    for (let i = 0; i < this.cardsToShow; i++) {
      this.visibleEspecialidades.push(
        this.especialidades[(this.currentStartIndex + i) % this.especialidades.length]
      );
    }
  }

  next() {
    this.currentStartIndex = (this.currentStartIndex + this.cardsToShow) % this.especialidades.length;
    this.updateVisibleEspecialidades();
  }

  previous() {
    this.currentStartIndex =
      (this.currentStartIndex - this.cardsToShow + this.especialidades.length) % this.especialidades.length;
    this.updateVisibleEspecialidades();
  }

  handleSendWppMessage() {
    let message = "Olá, gostaria de informações sobre agendamento de consulta com a clínica Liga Odontológica"
    this.whatsAppService.openWhatsAppWithMessage(environment.phoneNumber, message)
  }
}
