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
      relatedIconPath: 'assets/imgs/clinica-geral.svg'
    },
    {
      name: 'Consulta de Prevenção e Profilaxia',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
      relatedIconPath: 'assets/imgs/profilaxia.svg'
    },
    {
      name: 'Odontopediatria',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
      relatedIconPath: 'assets/imgs/pediatria.svg'
    },
    {
      name: 'Ortodontia e Ortopedia Facial',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
      relatedIconPath: 'assets/imgs/ortodontia.svg'
    },
    {
      name: 'Alinhadores',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
      relatedIconPath: 'assets/imgs/alinhadores.svg'
    },
    {
      name: 'Bucomaxilofacial',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
      relatedIconPath: 'assets/imgs/cirurgia.svg'
    },
    {
      name: 'Implantes Dentários',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
      relatedIconPath: 'assets/imgs/implantes.svg'
    },
    {
      name: 'Placa de Bruxismo',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
      relatedIconPath: 'assets/imgs/bruxismo.svg'
    },
    {
      name: 'Restaurações',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
      relatedIconPath: 'assets/imgs/restauracoes.svg'
    },
    {
      name: 'Clareamento Dental',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
      relatedIconPath: 'assets/imgs/clareamento.svg'
    },
    {
      name: 'Lentes de Contato Dentais ou Facetas',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
      relatedIconPath: 'assets/imgs/lentes.svg'
    },
    {
      name: 'Harmonização Facial',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
      relatedIconPath: 'assets/imgs/harmonizacao.svg'
    },
    {
      name: 'Periodontia',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
      relatedIconPath: 'assets/imgs/periodontia.svg'
    },
    {
      name: 'Tratamento de Canal',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
      relatedIconPath: 'assets/imgs/endodontia.svg'
    }
  ]

  getEspecialidades() {
    return this.especialidades;
  }
}
