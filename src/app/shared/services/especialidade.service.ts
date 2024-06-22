import { Injectable } from '@angular/core';
import { Especialidade } from '../interfaces/especialidade-interface';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadeService {

  constructor() { }

  especialidades: Especialidade[] = [
    {
      name: 'Clinica Geral',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
      relatedIconPath: 'assets/imgs/clicina-geral.png'
    },
    {
      name: 'Consulta de Prevenção e Profilaxia',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
      relatedIconPath: 'assets/imgs/profilaxia.png'
    },
    {
      name: 'Odontopediatria',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
      relatedIconPath: 'assets/imgs/pediatria.png'
    },
    {
      name: 'Ortodontia e Ortopedia Facial',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
      relatedIconPath: 'assets/imgs/ortodontia.png'
    },
    {
      name: 'Alinhadores',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
      relatedIconPath: 'assets/imgs/alinhadores.png'
    },
    {
      name: 'Bucomaxilofacial',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
      relatedIconPath: 'assets/imgs/cirurgia.png'
    },
    {
      name: 'Implantes Dentários',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
      relatedIconPath: 'assets/imgs/implantes.png'
    },
    {
      name: 'Placa de Bruxismo',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
      relatedIconPath: 'assets/imgs/bruxismo.png'
    },
    {
      name: 'Restaurações',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
      relatedIconPath: 'assets/imgs/restauracoes.png'
    },
    {
      name: 'Clareamento Dental',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
      relatedIconPath: 'assets/imgs/clareamento.png'
    },
    {
      name: 'Lentes de Contato Dentais ou Facetas',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
      relatedIconPath: 'assets/imgs/lentes.png'
    },
    {
      name: 'Harmonização Facial',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
      relatedIconPath: 'assets/imgs/harmonizacao.png'
    },
    {
      name: 'Periodontia',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
      relatedIconPath: 'assets/imgs/periodontia.png'
    },
    {
      name: 'Tratamento de Canal',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
      relatedIconPath: 'assets/imgs/endodontia.png'
    }
  ]

  getEspecialidades() {
    return this.especialidades;
  }
}
