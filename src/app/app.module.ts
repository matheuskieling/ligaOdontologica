import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ColorBarComponent } from './components/shared/color-bar/color-bar.component';
import { EspecialidadeCardComponent } from './components/shared/especialidade-card/especialidade-card.component';
import { WhatsAppFloatingButtonComponent } from './components/shared/whats-app-floating-button/whats-app-floating-button.component';
import { MatDividerModule } from '@angular/material/divider';
import { TeamPageComponent } from './pages/team-page/team-page.component';
import { PageTitleComponent } from './components/shared/page-title/page-title.component';
import { DentistaProfileComponent } from './components/shared/dentista-profile/dentista-profile.component';
import { EspecialidadesPageComponent } from './pages/especialidades-page/especialidades-page.component';
import { ConsultorioPageComponent } from './pages/consultorio-page/consultorio-page.component';
import { HeaderDesktopComponent } from './components/header/header-desktop/header-desktop.component';
import { HeaderMobileComponent } from './components/header/header-mobile/header-mobile.component';
import { HeroComponent } from './components/hero/hero.component';
import { HeroDesktopComponent } from './components/hero/hero-desktop/hero-desktop.component';
import { HeroMobileComponent } from './components/hero/hero-mobile/hero-mobile.component';
import { EspecialidadesDesktopComponent } from './components/especialidades/especialidades-desktop/especialidades-desktop.component';
import { EspecialidadesMobileComponent } from './components/especialidades/especialidades-mobile/especialidades-mobile.component';
import { EspecialidadesComponent } from './components/especialidades/especialidades.component';
import { EquipeComponent } from './components/equipe/equipe.component';
import { EquipeDesktopComponent } from './components/equipe/equipe-desktop/equipe-desktop.component';
import { EquipeMobileComponent } from './components/equipe/equipe-mobile/equipe-mobile.component';
import { ConsultorioComponent } from './components/consultorio/consultorio.component';
import { ConsultorioDesktopComponent } from './components/consultorio/consultorio-desktop/consultorio-desktop.component';
import { ConsultorioMobileComponent } from './components/consultorio/consultorio-mobile/consultorio-mobile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactPageComponent,
    HeaderComponent,
    FooterComponent,
    ColorBarComponent,
    EspecialidadeCardComponent,
    WhatsAppFloatingButtonComponent,
    TeamPageComponent,
    PageTitleComponent,
    DentistaProfileComponent,
    EspecialidadesPageComponent,
    ConsultorioPageComponent,
    HeaderDesktopComponent,
    HeaderMobileComponent,
    HeroComponent,
    HeroDesktopComponent,
    HeroMobileComponent,
    EspecialidadesComponent,
    EspecialidadesDesktopComponent,
    EspecialidadesMobileComponent,
    EquipeComponent,
    EquipeDesktopComponent,
    EquipeMobileComponent,
    ConsultorioComponent,
    ConsultorioDesktopComponent,
    ConsultorioMobileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
