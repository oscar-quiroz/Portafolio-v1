import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { SkilListComponent } from './components/skil-list/skil-list.component';
import { SkilsComponent } from './components/skils/skils.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { AcercaComponent } from './components/acerca/acerca.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SkilListComponent,
    SkilsComponent,
    FooterComponent,
    ContactComponent,
    PortafolioComponent,
    AcercaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
