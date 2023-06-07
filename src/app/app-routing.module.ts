import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AddingPageComponent } from './adding-page/adding-page.component';
import { ViewingPageComponent } from './viewing-page/viewing-page.component';
import { UpdatingPageComponent } from './updating-page/updating-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
  {
    // http://localhost:4200/
    path:'',redirectTo:'genesis/admin',pathMatch:'full'
  },
  {
    // http://localhost:4200/landingPage
    path:'genesis/admin',component:LandingPageComponent
  },
  {
    // http://localhost:4200/addingPage
    path:'genesis/add',component:AddingPageComponent
  },
  {
    // http://localhost:4200/viewingPage
    path:'genesis/view/:id',component:ViewingPageComponent
  },
  {
    // http://localhost:4200/updatingPage
    path:'genesis/update/:id',component:UpdatingPageComponent
  },
  {
    // http://localhost:4200/error
    path:'**',component:ErrorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
