import { Component, Input } from '@angular/core';
import { Dentista } from 'src/app/shared/interfaces/dentista-interface';

@Component({
  selector: 'app-team-page-desktop',
  templateUrl: './team-page-desktop.component.html',
  styleUrls: ['./team-page-desktop.component.scss']
})
export class TeamPageDesktopComponent {
  @Input() dentistasFirstRow!: Dentista[]
  @Input() dentistasSecondRow!: Dentista[]
}
