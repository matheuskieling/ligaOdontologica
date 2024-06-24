import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-title-mobile',
  templateUrl: './page-title-mobile.component.html',
  styleUrls: ['./page-title-mobile.component.scss']
})
export class PageTitleMobileComponent {
  @Input() pageTitle!: string;
  @Input() color!: string;
}
