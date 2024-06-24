import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { TeamPageComponent } from './pages/team-page/team-page.component';
import { EspecialidadesPageComponent } from './pages/especialidades-page/especialidades-page.component';
import { ConsultorioPageComponent } from './pages/consultorio-page/consultorio-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contato', component: ContactPageComponent },
  { path: 'equipe', component: TeamPageComponent },
  { path: 'especialidades', component: EspecialidadesPageComponent },
  { path: 'consultorio', component: ConsultorioPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
