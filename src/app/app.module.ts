import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ColorBarComponent } from './components/shared/color-bar/color-bar.component';
import { EspecialidadeCardComponent } from './components/shared/especialidade-card/especialidade-card.component';
import { WhatsAppFloatingButtonComponent } from './components/shared/whats-app-floating-button/whats-app-floating-button.component';
import { MatDividerModule } from '@angular/material/divider'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    ColorBarComponent,
    EspecialidadeCardComponent,
    WhatsAppFloatingButtonComponent
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
