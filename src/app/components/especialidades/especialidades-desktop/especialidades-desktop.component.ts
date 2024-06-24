import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Especialidade } from 'src/app/shared/interfaces/especialidade-interface';

@Component({
  selector: 'app-especialidades-desktop',
  templateUrl: './especialidades-desktop.component.html',
  styleUrls: ['./especialidades-desktop.component.scss']
})
export class EspecialidadesDesktopComponent {
  @Output() previousEmitter: EventEmitter<any> = new EventEmitter();
  @Output() nextEmitter: EventEmitter<any> = new EventEmitter();
  @Output() navClick: EventEmitter<any> = new EventEmitter();
  @Input() visibleEspecialidades!: Especialidade[];


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
