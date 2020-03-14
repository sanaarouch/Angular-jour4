import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import { FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { MenuComponent } from './commun/menu/menu.component';
import { AccueilComponent } from './front/accueil/accueil.component';
import { ArticleComponent } from './front/article/article.component';
import { ContactComponent } from './front/contact/contact.component';
import { PortfolioComponent } from './front/portfolio/portfolio.component';
import { NotFoundComponent } from "./front/not-found/not-found.component";

import { PortfolioService } from "./service/portfolio.service";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AccueilComponent,
    ArticleComponent,
    ContactComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path : "" , component: AccueilComponent} , // page d'accueil
      {path : "articles" , component : ArticleComponent} , 
      {path : "contact" , component : ContactComponent},
      {path : "portfolio" , component : PortfolioComponent},
      {path : "**" , component : NotFoundComponent}
      // n'importe quel url
      // il faut que le path du not-found => soit mis en DERNIER dans la déclaration des routes 
    ]), // attention sans / slash  au début
    HttpClientModule,
    FormsModule
  ],
  providers: [
    PortfolioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// nouvelle page qui va permettre de générer les erreur 404
// une page du site qui n'existe pas en tapant une adresse
// créer un composant front/not-found