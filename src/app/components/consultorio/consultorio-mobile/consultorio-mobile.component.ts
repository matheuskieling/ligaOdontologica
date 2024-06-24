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
}
