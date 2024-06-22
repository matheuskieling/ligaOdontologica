import { Component } from '@angular/core';
import { Dentista } from 'src/app/shared/interfaces/dentista-interface';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {
  isWhatsOpened = false;

  dentistasFirstRow: Dentista[] = [
    {
      name: "Manuela Gomes",
      cro: "CRORS 27099",
      imgSrc: "../../../assets/imgs/consultorio/Rectangle-12.png",
      color: "green",
      descricaoListItems: [
        "Sócia proprietária Liga Odontológica Integrada.",
        "Graduada em Odontologia - Universidade Federal de Pelotas (UFPEL)",
        "Especialista em Ortodontia - Pontifícia Universidade Católica do Rio Grande do Sul (PUCRS).",
        "Responsável Técnica"
      ]
    },
    {
      name: "Mariana Kieling",
      cro: "CRORS 26215",
      imgSrc: "../../../assets/imgs/consultorio/Rectangle-13.png",
      color: "yellow",
      descricaoListItems: [
        "Sócia proprietária Liga Odontológica Integrada.",
        "Graduada em Odontologia - Universidade de Passo Fundo (UPF)",
        "Especialista em Ortodontia - Pontifícia Universidade Católica do Rio Grande do Sul (PUCRS)",
      ]
    }
  ];

  
  dentistasSecondRow: Dentista[] = [
    {
      name: "Bianca Munari",
      cro: "CRORS 17216",
      imgSrc: "../../../assets/imgs/consultorio/Rectangle-14.png",
      color: "pink",
      descricaoListItems: [
        "Graduada em Odontologia - Universidade Luterana do Brasil (ULBRA)",
        "Especialista em Cirurgia e Traumatologia Bucomaxilofacial - Universidade Luterana do Brasil (ULBRA)",
        "Especialista em Implantodontia - Agor",
      ]
    },
    {
      name: "Isadora Pignataro",
      cro: "CRORS 30112",
      imgSrc: "../../../assets/imgs/consultorio/Rectangle-15.png",
      color: "blue",
      descricaoListItems: [
        "Graduada em Odontologia - Universidade Federal do Rio Grande do Sul (UFRGS)",
        "Especializanda em Odontopediatria - São Leopoldo Mandic",
      ]
    }
  ];

  constructor() {
    window.addEventListener('click', (e: any) => {  
      if (!document.getElementById('whats')!.contains(e.target)){
        this.isWhatsOpened = false;
      }
    });
  }

  handleToggleOpen() {
    this.isWhatsOpened = !this.isWhatsOpened;
  }
}
