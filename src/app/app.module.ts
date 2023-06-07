import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AddingPageComponent } from './adding-page/adding-page.component';
import { UpdatingPageComponent } from './updating-page/updating-page.component';
import { ViewingPageComponent } from './viewing-page/viewing-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from "@angular/common/http";
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    AddingPageComponent,
    UpdatingPageComponent,
    ViewingPageComponent,
    ErrorPageComponent,
    NavbarComponent,
    FooterComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
