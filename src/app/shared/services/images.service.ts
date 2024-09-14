import { Injectable } from '@angular/core';
import { FotoConsultorio } from '../interfaces/photo-interface';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor() { }

  fotosConsultorio: FotoConsultorio[] = [
    {
      src: "assets/imgs/consultorio/consultorio_1.jpg",
      alt: "Foto do consultório"
    },
    {
      src: "assets/imgs/consultorio/consultorio_2.jpg",
      alt: "Foto do consultório"
    },
    {
      src: "assets/imgs/consultorio/consultorio_3.jpg",
      alt: "Foto do consultório"
    },
    {
      src: "assets/imgs/consultorio/consultorio_4.jpg",
      alt: "Foto do consultório"
    },
    {
      src: "assets/imgs/consultorio/consultorio_5.jpg",
      alt: "Foto do consultório"
    },
    {
      src: "assets/imgs/consultorio/consultorio_6.jpg",
      alt: "Foto do consultório"
    },
    {
      src: "assets/imgs/consultorio/consultorio_7.jpg",
      alt: "Foto do consultório"
    },
    {
      src: "assets/imgs/consultorio/consultorio_8.jpg",
      alt: "Foto do consultório"
    },
    {
      src: "assets/imgs/consultorio/consultorio_9.jpg",
      alt: "Foto do consultório"
    },
    {
      src: "assets/imgs/consultorio/consultorio_10.jpg",
      alt: "Foto do consultório"
    },
    {
      src: "assets/imgs/consultorio/consultorio_11.jpg",
      alt: "Foto do consultório"
    },
    {
      src: "assets/imgs/consultorio/consultorio_12.jpg",
      alt: "Foto do consultório"
    },
    {
      src: "assets/imgs/consultorio/consultorio_13.jpg",
      alt: "Foto do consultório"
    },
    {
      src: "assets/imgs/consultorio/consultorio_14.jpg",
      alt: "Foto do consultório"
    },

  ]


  getFotosConsultorio() {
    return this.fotosConsultorio;
  }
}
