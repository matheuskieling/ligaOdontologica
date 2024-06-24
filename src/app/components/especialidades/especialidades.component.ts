import { Component, Input, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Especialidade } from 'src/app/shared/interfaces/especialidade-interface';
import { EspecialidadeService } from 'src/app/shared/services/especialidade.service';

@Component({
  selector: 'app-especialidades',
  templateUrl: './especialidades.component.html',
  styleUrls: ['./especialidades.component.scss']
})
export class EspecialidadesComponent {
  @Input() isMobile!: boolean;

  especialidadeList: Especialidade[] = [];
  visibleEspecialidades: Especialidade[] = [];
  currentStartIndex: number = 0;
  cardsToShow: number = 4; // Static number of cards to show

  constructor(
    private especialidadeService: EspecialidadeService,
    private router: Router
  ) {}

  ngOnInit() {
    this.especialidadeList = this.especialidadeService.getEspecialidades();

  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
    this.especialidadeList = this.especialidadeService.getEspecialidades();
    this.updateVisibleEspecialidades();
  }

  updateVisibleEspecialidades() {
    this.visibleEspecialidades = [];
    this.cardsToShow = this.isMobile ? 2 : 4;
    for (let i = 0; i < this.cardsToShow; i++) {
      this.visibleEspecialidades.push(
        this.especialidadeList[(this.currentStartIndex + i) % this.especialidadeList.length]
      );
    }
  }

  next() {
    this.currentStartIndex = (this.currentStartIndex + (this.isMobile ? this.cardsToShow - 1 : this.cardsToShow)) % this.especialidadeList.length;
    this.updateVisibleEspecialidades();
  }

  previous() {
    this.currentStartIndex =
      (this.currentStartIndex - (this.isMobile ? this.cardsToShow - 1 : this.cardsToShow) + this.especialidadeList.length) % this.especialidadeList.length;
    this.updateVisibleEspecialidades();
  }

  routerNav() {
    this.router.navigate(['especialidades'])
  }
}
