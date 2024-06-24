import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Especialidade } from 'src/app/shared/interfaces/especialidade-interface';

@Component({
  selector: 'app-especialidades-mobile',
  templateUrl: './especialidades-mobile.component.html',
  styleUrls: ['./especialidades-mobile.component.scss']
})
export class EspecialidadesMobileComponent {
  @Output() previousEmitter: EventEmitter<any> = new EventEmitter();
  @Output() nextEmitter: EventEmitter<any> = new EventEmitter();
  @Input() visibleEspecialidades!: Especialidade[];
  @Output() navClick: EventEmitter<any> = new EventEmitter();

  previous() {
    this.previousEmitter.emit()
  }

  next() {
    this.nextEmitter.emit();
  }

  routerNav() {
    this.navClick.emit()
  }
}
