import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-equipe-mobile',
  templateUrl: './equipe-mobile.component.html',
  styleUrls: ['./equipe-mobile.component.scss']
})
export class EquipeMobileComponent {
  constructor(
    private router: Router
  ) {}


  routerNav(page: string) {
    this.router.navigate([page])
  }
}
