import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { HomeService } from './services/home.service';
import { CartService } from './services/cart.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WishlistComponent } from './wishlist/wishlist.component';
import { WishlistDataService } from './services/wishlist.service';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AddproductService } from './services/addproduct.service';
import { RetailerdetailsComponent } from './retailerdetails/retailerdetails.component';
import { RetailerService } from './services/retailer.service';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    CartComponent,
    WishlistComponent,
    AddproductComponent,
    RetailerdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [HomeService,CartService,WishlistDataService,AddproductService,RetailerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
