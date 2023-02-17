import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtformpageComponent } from './pagees/artformpage/artformpage.component';
import { ContactpageComponent } from './pagees/contactpage/contactpage.component';
import { HomepageComponent } from './pagees/homepage/homepage.component';
import { SigninpageComponent } from './pagees/signinpage/signinpage.component';
import { SignuppageComponent } from './pagees/signuppage/signuppage.component';
import { SinglepageComponent } from './pagees/singlepage/singlepage.component';

const routes: Routes = [
{
  path: '', component: HomepageComponent
},
{
  path: 'contactpage', component: ContactpageComponent
},
{
  path: 'artformpage', component: ArtformpageComponent
},
{
  path: 'signinpage', component: SigninpageComponent
},
{
  path: 'signuppage', component: SignuppageComponent
},
{
  path: 'singlepage', component: SinglepageComponent
},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
