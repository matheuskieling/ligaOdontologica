import { Component, Input } from '@angular/core';
import { Especialidade } from 'src/app/shared/interfaces/especialidade-interface';

@Component({
  selector: 'app-especialidade-card-mobile',
  templateUrl: './especialidade-card-mobile.component.html',
  styleUrls: ['./especialidade-card-mobile.component.scss']
})
export class EspecialidadeCardMobileComponent {
  @Input() especialidade!: Especialidade;
  @Input() showDescription!: boolean;

}
