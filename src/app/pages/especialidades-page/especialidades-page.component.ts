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
  isMobile: boolean = true;

  constructor(
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
  }

  handleToggleOpen() {
    this.isWhatsOpened = !this.isWhatsOpened;
  }
}
