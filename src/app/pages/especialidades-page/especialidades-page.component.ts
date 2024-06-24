import { Component } from '@angular/core';
import { Especialidade } from 'src/app/shared/interfaces/especialidade-interface';
import { EspecialidadeService } from 'src/app/shared/services/especialidade.service';
import { ResponsiveService } from 'src/app/shared/services/responsive.service';

@Component({
  selector: 'app-especialidades-page',
  templateUrl: './especialidades-page.component.html',
  styleUrls: ['./especialidades-page.component.scss']
})
export class EspecialidadesPageComponent {
  isWhatsOpened = false;
  dividedEspecialidades: Especialidade[][] = []
  isMobile: boolean = true;

  constructor(
    private especialidadeService: EspecialidadeService,
    private responsiveService: ResponsiveService
  ) {
    window.addEventListener('click', (e: any) => {  
      if (!document.getElementById('whats')!.contains(e.target)){
        this.isWhatsOpened = false;
      }
    });
  }

  ngOnInit() {
    this.responsiveService.screenType$.subscribe(screenType => {
      this.isMobile = screenType == 'mobile'
      console.log(`Current screen type: ${screenType}`);
    });
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
