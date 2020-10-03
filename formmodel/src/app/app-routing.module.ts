import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MultipleformComponent } from './multipleform/multipleform.component';
import { SubmitdetailsComponent } from './submitdetails/submitdetails.component';

const routes: Routes = [

  {
    path: 'mulform' ,component:MultipleformComponent
  },
  {
    path:'submitdetails' , component: SubmitdetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
