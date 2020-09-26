import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PersonaldetailsComponent } from './personaldetails/personaldetails.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductsComponent } from './products/products.component';


const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'profile',component:ProfileComponent,children:[{path:'personaldetails',component:PersonaldetailsComponent}]},
  {path:'products',component:ProductsComponent},
  {path:'**',component:PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
