import { Component } from '@angular/core';
import { FotoConsultorio } from 'src/app/shared/interfaces/photo-interface';
import { ImageService } from 'src/app/shared/services/images.service';

@Component({
  selector: 'app-consultorio',
  templateUrl: './consultorio.component.html',
  styleUrls: ['./consultorio.component.scss']
})
export class ConsultorioComponent {
  isWhatsOpened = false;
  fotosConsultorio: FotoConsultorio[] = [];
  visibleFotosConsultorio: FotoConsultorio[] = [];
  consultorioStartIndex: number = 0;
  constructor(
    private imageService: ImageService
  ) {
    window.addEventListener('click', (e: any) => {  
      if (!document.getElementById('whats')!.contains(e.target)){
        this.isWhatsOpened = false;
      }
    });
  }

  ngOnInit() {
    this.fotosConsultorio = this.imageService.getFotosConsultorio();
    this.updateVisibleFotosConsultorio();
  }

  handleToggleOpen() {
    this.isWhatsOpened = !this.isWhatsOpened;
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
