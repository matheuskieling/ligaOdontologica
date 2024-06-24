import { Component } from '@angular/core';
import { ResponsiveService } from 'src/app/shared/services/responsive.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent {
  isMobile: boolean = true;
  isWhatsOpened = false;

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
