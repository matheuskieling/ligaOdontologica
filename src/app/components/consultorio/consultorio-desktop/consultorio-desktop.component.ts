import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FotoConsultorio } from 'src/app/shared/interfaces/photo-interface';

@Component({
  selector: 'app-consultorio-desktop',
  templateUrl: './consultorio-desktop.component.html',
  styleUrls: ['./consultorio-desktop.component.scss']
})
export class ConsultorioDesktopComponent {
  @Output() next: EventEmitter<any> = new EventEmitter();
  @Output() previous: EventEmitter<any> = new EventEmitter();
  @Input() visibleFotosConsultorio!: FotoConsultorio[];

  previousConsultorio() {
    this.previous.emit()
  }

  nextConsultorio() {
    this.next.emit()
  }

  getConsultorioImageClass(index: number): string {
    if (index === 0) {
      return 'image-left';
    } else if (index === 1) {
      return 'image-center';
    } else if (index === 2) {
      return 'image-right';
    }
    return '';
  }
}
