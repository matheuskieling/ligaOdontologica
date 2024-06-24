import { Component } from '@angular/core';
import { Especialidade } from 'src/app/shared/interfaces/especialidade-interface';
import { EspecialidadeService } from 'src/app/shared/services/especialidade.service';
import { ResponsiveService } from 'src/app/shared/services/responsive.service';

@Component({
  selector: 'app-especialidades-page-mobile',
  templateUrl: './especialidades-page-mobile.component.html',
  styleUrls: ['./especialidades-page-mobile.component.scss']
})
export class EspecialidadesPageMobileComponent {
  isWhatsOpened = false;
  especialidades: Especialidade[] = []
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
    this.especialidades = this.especialidadeService.getEspecialidades()
  }

  handleToggleOpen() {
    this.isWhatsOpened = !this.isWhatsOpened;
  }
}
