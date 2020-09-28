import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import {WishlistComponent} from './wishlist/wishlist.component';
import {AddproductComponent} from './addproduct/addproduct.component';
import {RetailerdetailsComponent} from './retailerdetails/retailerdetails.component';

const routes: Routes = [
  {
    path: 'cart', component: CartComponent
  },
  {
    path: "wishlist",component: WishlistComponent
  },
  {
    path: "addproduct", component: AddproductComponent
  },
  { 
    path: "retailerdetails", component:RetailerdetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
