import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FotoConsultorio } from 'src/app/shared/interfaces/photo-interface';
import { ImageService } from 'src/app/shared/services/images.service';

@Component({
  selector: 'app-consultorio-mobile',
  templateUrl: './consultorio-mobile.component.html',
  styleUrls: ['./consultorio-mobile.component.scss']
})
export class ConsultorioMobileComponent {
  fotosConsultorio: FotoConsultorio[] = [];
  visibleFotosConsultorio: FotoConsultorio[] = [];
  consultorioStartIndex: number = 0;

  private touchStartX: number = 0;
  private touchEndX: number = 0;

  constructor(
    private imageService: ImageService
  ) {}

  ngOnInit() {
    this.fotosConsultorio = this.imageService.getFotosConsultorio();
    this.preloadImages();
    this.updateVisibleFotosConsultorio();
  }

  preloadImages() {
    this.fotosConsultorio.forEach(foto => {
      const img = new Image();
      img.src = foto.src;
    });
  }

  updateVisibleFotosConsultorio() {
    this.visibleFotosConsultorio = [];
    this.visibleFotosConsultorio.push(
      this.fotosConsultorio[(this.consultorioStartIndex) % this.fotosConsultorio.length]
    );
  }
  
  nextConsultorio() {
    this.consultorioStartIndex = (this.consultorioStartIndex + 1) % this.fotosConsultorio.length;
    this.updateVisibleFotosConsultorio();
  }
  
  previousConsultorio() {
    this.consultorioStartIndex =
      (this.consultorioStartIndex - 1 + this.fotosConsultorio.length) % this.fotosConsultorio.length;
    this.updateVisibleFotosConsultorio();
  }

  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.changedTouches[0].screenX;
  }

  onTouchMove(event: TouchEvent) {
    this.touchEndX = event.changedTouches[0].screenX;
  }

  onTouchEnd() {
    if (Math.abs(this.touchEndX - this.touchStartX) < 100) return
    if (this.touchEndX < this.touchStartX) {
      this.nextConsultorio(); // Swipe left, move to next
    }
    if (this.touchEndX > this.touchStartX) {
      this.previousConsultorio(); // Swipe right, move to previous
    }
  }
}
