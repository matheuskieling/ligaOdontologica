import { Component, Input } from '@angular/core';
import { Dentista } from 'src/app/shared/interfaces/dentista-interface';

@Component({
  selector: 'app-dentista-profile',
  templateUrl: './dentista-profile.component.html',
  styleUrls: ['./dentista-profile.component.scss']
})
export class DentistaProfileComponent {
  @Input() data!: Dentista;
}
