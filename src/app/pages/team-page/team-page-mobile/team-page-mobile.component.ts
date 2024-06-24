import { Component, Input } from '@angular/core';
import { Dentista } from 'src/app/shared/interfaces/dentista-interface';

@Component({
  selector: 'app-team-page-mobile',
  templateUrl: './team-page-mobile.component.html',
  styleUrls: ['./team-page-mobile.component.scss']
})
export class TeamPageMobileComponent {
  @Input() dentistasFirstRow!: Dentista[]
  @Input() dentistasSecondRow!: Dentista[]
  dentistas: Dentista[] = [];

  ngOnInit() {
    this.dentistas = [...this.dentistasFirstRow, ...this.dentistasSecondRow]
  }
}
