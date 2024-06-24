import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-equipe-desktop',
  templateUrl: './equipe-desktop.component.html',
  styleUrls: ['./equipe-desktop.component.scss']
})
export class EquipeDesktopComponent {
  constructor(
    private router: Router
  ) {}


  routerNav(page: string) {
    this.router.navigate([page])
  }
}
