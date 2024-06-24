import { Component, Input } from '@angular/core';
import { Dentista } from 'src/app/shared/interfaces/dentista-interface';

@Component({
  selector: 'app-dentista-profile-mobile',
  templateUrl: './dentista-profile-mobile.component.html',
  styleUrls: ['./dentista-profile-mobile.component.scss']
})
export class DentistaProfileMobileComponent {
  @Input() data!: Dentista;
  @Input() isMobile!: boolean;
}
