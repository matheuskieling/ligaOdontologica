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

  private touchStartX: number = 0;
  private touchEndX: number = 0;

  previous() {
    this.previousEmitter.emit()
  }

  next() {
    this.nextEmitter.emit();
  }

  routerNav() {
    this.navClick.emit()
  }

  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.changedTouches[0].screenX;
    console.log('start')
  }

  onTouchMove(event: TouchEvent) {
    this.touchEndX = event.changedTouches[0].screenX;
    console.log('end')
  }

  onTouchEnd() {
    if (Math.abs(this.touchEndX - this.touchStartX) < 100) return
    if (this.touchEndX < this.touchStartX) {      
      this.next(); // Swipe left, move to next
    }
    if (this.touchEndX > this.touchStartX) {
      this.previous(); // Swipe right, move to previous
    }
  }
}
