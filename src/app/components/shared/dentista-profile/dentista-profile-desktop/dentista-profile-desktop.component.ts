import { Component, Input } from '@angular/core';
import { Dentista } from 'src/app/shared/interfaces/dentista-interface';

@Component({
  selector: 'app-dentista-profile-desktop',
  templateUrl: './dentista-profile-desktop.component.html',
  styleUrls: ['./dentista-profile-desktop.component.scss']
})
export class DentistaProfileDesktopComponent {
  @Input() data!: Dentista;
  @Input() isMobile!: boolean;
}
