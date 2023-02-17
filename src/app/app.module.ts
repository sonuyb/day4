import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pagees/homepage/homepage.component';
import { ContactpageComponent } from './pagees/contactpage/contactpage.component';
import { SigninpageComponent } from './pagees/signinpage/signinpage.component';
import { SignuppageComponent } from './pagees/signuppage/signuppage.component';
import { NavbarComponent } from './units/navbar/navbar.component';
import { FooterComponent } from './units/footer/footer.component';
import { SinglepageComponent } from './pagees/singlepage/singlepage.component';
import { ArtformpageComponent } from './pagees/artformpage/artformpage.component';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ContactpageComponent,
    SigninpageComponent,
    SignuppageComponent,
    NavbarComponent,
    FooterComponent,
    SinglepageComponent,
    ArtformpageComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
