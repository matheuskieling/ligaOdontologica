import { Component, Input } from '@angular/core';
import { FotoConsultorio } from 'src/app/shared/interfaces/photo-interface';
import { ImageService } from 'src/app/shared/services/images.service';

@Component({
  selector: 'app-consultorio',
  templateUrl: './consultorio.component.html',
  styleUrls: ['./consultorio.component.scss']
})
export class ConsultorioComponent {
  @Input() isMobile!: boolean
  fotosConsultorio: FotoConsultorio[] = [];
  visibleFotosConsultorio: FotoConsultorio[] = [];
  consultorioStartIndex: number = 0;

  constructor(
    private imageService: ImageService
  ) {}

  ngOnInit() {
    this.fotosConsultorio = this.imageService.getFotosConsultorio();
    this.updateVisibleFotosConsultorio();
  }

  updateVisibleFotosConsultorio() {
    const tempArray: FotoConsultorio[] = [];
    for (let i = 0; i < 3; i++) { // Display 3 photos at a time
      tempArray.push(
        this.fotosConsultorio[(this.consultorioStartIndex + i) % this.fotosConsultorio.length]
      );
    }
    
    this.visibleFotosConsultorio = [];
    
    setTimeout(() => {
      this.visibleFotosConsultorio = tempArray;
    }, 0);
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
