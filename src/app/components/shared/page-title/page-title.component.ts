import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss']
})
export class PageTitleComponent {
  @Input() pageTitle!: string;
  @Input() color!: string;
  @Input() isMobile!: boolean;
  
  constructor() {}
}
