import { Component } from '@angular/core';
import { Especialidade } from 'src/app/shared/interfaces/especialidade-interface';
import { EspecialidadeService } from 'src/app/shared/services/especialidade.service';

@Component({
  selector: 'app-especialidades',
  templateUrl: './especialidades.component.html',
  styleUrls: ['./especialidades.component.scss']
})
export class EspecialidadesComponent {
  isWhatsOpened = false;
  dividedEspecialidades: Especialidade[][] = []
  constructor(
    private especialidadeService: EspecialidadeService
  ) {
    window.addEventListener('click', (e: any) => {  
      if (!document.getElementById('whats')!.contains(e.target)){
        this.isWhatsOpened = false;
      }
    });
  }

  ngOnInit() {
    const especialidades = this.especialidadeService.getEspecialidades()
    const chunkSize = 3;
    for (let i = 0; i < especialidades.length; i += chunkSize) {
        const chunk = especialidades.slice(i, i + chunkSize);
        this.dividedEspecialidades.push(chunk)
    }
  }

  handleToggleOpen() {
    this.isWhatsOpened = !this.isWhatsOpened;
  }
}
