import { Component } from '@angular/core';
import { Dentista } from 'src/app/shared/interfaces/dentista-interface';
import { ResponsiveService } from 'src/app/shared/services/responsive.service';

@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.scss']
})
export class TeamPageComponent {
  isWhatsOpened = false;
  isMobile: boolean = true;


  dentistasFirstRow: Dentista[] = [
    {
      name: "Manuela Gomes",
      cro: "CRORS 27099",
      imgSrc: "../../../assets/imgs/equipe/manuela_equipe.jpg",
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
      imgSrc: "../../../assets/imgs/equipe/mari_equipe.jpg",
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
      imgSrc: "../../../assets/imgs/equipe/bianca_equipe.jpg",
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
      imgSrc: "../../../assets/imgs/equipe/isadora_equipe.jpg",
      color: "blue",
      descricaoListItems: [
        "Graduada em Odontologia - Universidade Federal do Rio Grande do Sul (UFRGS)",
        "Especializanda em Odontopediatria - São Leopoldo Mandic",
      ]
    }
  ];

  
  constructor(
    private responsiveService: ResponsiveService
  ) {
    window.addEventListener('click', (e: any) => {  
      if (!document.getElementById('whats')!.contains(e.target)){
        this.isWhatsOpened = false;
      }
    });
  }

  ngOnInit() {
    this.responsiveService.screenType$.subscribe(screenType => {
      this.isMobile = screenType == 'mobile'
      console.log(`Current screen type: ${screenType}`);
    });
  }

  handleToggleOpen() {
    this.isWhatsOpened = !this.isWhatsOpened;
  }
}
