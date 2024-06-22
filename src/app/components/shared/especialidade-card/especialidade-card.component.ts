import { Component, Input } from '@angular/core';
import { Especialidade } from 'src/app/shared/interfaces/especialidade-interface';

@Component({
  selector: 'app-especialidade-card',
  templateUrl: './especialidade-card.component.html',
  styleUrls: ['./especialidade-card.component.scss']
})
export class EspecialidadeCardComponent {
  @Input() width!: number;
  @Input() height!: number;
  @Input() especialidade!: Especialidade;
}