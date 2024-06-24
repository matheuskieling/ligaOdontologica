import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-title-desktop',
  templateUrl: './page-title-desktop.component.html',
  styleUrls: ['./page-title-desktop.component.scss']
})
export class PageTitleDesktopComponent {
  @Input() pageTitle!: string;
  @Input() color!: string;
}
