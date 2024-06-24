import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TeamComponent } from './pages/team/team.component';
import { EspecialidadesPageComponent } from './pages/especialidades-page/especialidades-page.component';
import { ConsultorioComponent } from './pages/consultorio/consultorio.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contato', component: ContactComponent },
  { path: 'equipe', component: TeamComponent },
  { path: 'especialidades', component: EspecialidadesPageComponent },
  { path: 'consultorio', component: ConsultorioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
