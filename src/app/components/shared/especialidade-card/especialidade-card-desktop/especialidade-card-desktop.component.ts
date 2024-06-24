import { Component, Input } from '@angular/core';
import { Especialidade } from 'src/app/shared/interfaces/especialidade-interface';

@Component({
  selector: 'app-especialidade-card-desktop',
  templateUrl: './especialidade-card-desktop.component.html',
  styleUrls: ['./especialidade-card-desktop.component.scss']
})
export class EspecialidadeCardDesktopComponent {
  @Input() especialidade!: Especialidade;
  @Input() showDescription!: boolean;
}
