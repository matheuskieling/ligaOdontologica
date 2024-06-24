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
      description: 'Cuidados básicos e preventivos para a saúde bucal de toda a família.',
      relatedIconPath: 'assets/imgs/clicina-geral.png'
    },
    {
      name: 'Consulta de Prevenção e Profilaxia',
      description: 'Avaliação e limpeza para prevenir doenças bucais e manter a saúde dental.',
      relatedIconPath: 'assets/imgs/profilaxia.png'
    },
    {
      name: 'Odontopediatria',
      description: 'Cuidados dentários especializados para crianças, com foco em prevenção e tratamento.',
      relatedIconPath: 'assets/imgs/pediatria.png'
    },
    {
      name: 'Ortodontia e Ortopedia Facial',
      description: 'Correção de alinhamento dentário e facial para um sorriso harmonioso.',
      relatedIconPath: 'assets/imgs/ortodontia.png'
    },
    {
      name: 'Alinhadores',
      description: 'Soluções discretas e eficazes para alinhamento dentário sem aparelhos fixos.',
      relatedIconPath: 'assets/imgs/alinhadores.png'
    },
    {
      name: 'Bucomaxilofacial',
      description: 'Cirurgias e tratamentos complexos envolvendo boca, maxilar e rosto.',
      relatedIconPath: 'assets/imgs/cirurgia.png'
    },
    {
      name: 'Implantes Dentários',
      description: 'Substituição permanente de dentes perdidos com implantes de alta qualidade.',
      relatedIconPath: 'assets/imgs/implantes.png'
    },
    {
      name: 'Placa de Bruxismo',
      description: 'Dispositivos para proteger os dentes contra os efeitos do bruxismo.',
      relatedIconPath: 'assets/imgs/bruxismo.png'
    },
    {
      name: 'Restaurações',
      description: 'Reparação de dentes danificados para restaurar função e estética.',
      relatedIconPath: 'assets/imgs/restauracoes.png'
    },
    {
      name: 'Clareamento Dental',
      description: 'Tratamentos para deixar os dentes mais brancos e brilhantes.',
      relatedIconPath: 'assets/imgs/clareamento.png'
    },
    {
      name: 'Lentes de Contato Dentais',
      description: 'Correção estética de dentes com lâminas finas e personalizadas.',
      relatedIconPath: 'assets/imgs/lentes.png'
    },
    {
      name: 'Harmonização Facial',
      description: 'Procedimentos estéticos para melhorar a harmonia e simetria do rosto.',
      relatedIconPath: 'assets/imgs/harmonizacao.png'
    },
    {
      name: 'Periodontia',
      description: 'Tratamento de doenças das gengivas e tecidos de suporte dos dentes.',
      relatedIconPath: 'assets/imgs/periodontia.png'
    },
    {
      name: 'Tratamento de Canal',
      description: 'Tratamento endodôntico para salvar dentes com infecções ou danos graves.',
      relatedIconPath: 'assets/imgs/endodontia.png'
    }
  ]
  getEspecialidades() {
    return this.especialidades;
  }
}
