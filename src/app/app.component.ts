import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'liga-odonto';

  constructor(private router: Router){}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const newUrl = event.urlAfterRedirects.replace('#/', ''); // Remove o # da URL visível
        window.history.replaceState({}, '', newUrl); // Atualiza a barra de endereços sem o #
      }
    });
  }
}
