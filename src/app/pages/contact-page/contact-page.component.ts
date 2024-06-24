import { Component } from '@angular/core';
import { ResponsiveService } from 'src/app/shared/services/responsive.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent {
  isMobile: boolean = true;

  constructor(
    private responsiveService: ResponsiveService
  ){}

  ngOnInit() {
    this.responsiveService.screenType$.subscribe(screenType => {
      this.isMobile = screenType == 'mobile'
      console.log(`Current screen type: ${screenType}`);
    });
  }
}
