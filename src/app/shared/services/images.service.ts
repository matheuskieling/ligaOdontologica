import { Injectable } from '@angular/core';
import { FotoConsultorio } from '../interfaces/photo-interface';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor() { }

  fotosConsultorio: FotoConsultorio[] = [
    {
      src: "assets/imgs/consultorio/Rectangle-12.png",
      alt: "Foto do consultório"
    },
    {
      src: "assets/imgs/consultorio/Rectangle-13.png",
      alt: "Foto do consultório"
    },
    {
      src: "assets/imgs/consultorio/Rectangle-14.png",
      alt: "Foto do consultório"
    },
    {
      src: "assets/imgs/consultorio/Rectangle-15.png",
      alt: "Foto do consultório"
    },
    {
      src: "assets/imgs/consultorio/Rectangle-16.png",
      alt: "Foto do consultório"
    }
  ]


  getFotosConsultorio() {
    return this.fotosConsultorio;
  }
}
