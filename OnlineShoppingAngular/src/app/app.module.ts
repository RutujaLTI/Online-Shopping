import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductComponent } from './product/product.component';
import { ProfileComponent } from './profile/profile.component';
import { PersonaldetailsComponent } from './personaldetails/personaldetails.component';
import { ProductsComponent } from './products/products.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AdminDashBoardComponent } from './admin-dash-board/admin-dash-board.component';
import { OtpService } from './services/OtpService';
import { UserService } from './services/UserService';
import { ProductService } from './services/ProductService';
import { HttpClientModule } from '@angular/common/http';
import { VerifyProductComponent } from './verify-product/verify-product.component';
import { AddRetailerComponent } from './add-retailer/add-retailer.component';
import { RetailerService } from './services/RetailerService';
import { AddCategoryComponent } from './add-category/add-category.component';
import { CategoryService } from './services/CategoryService';
import { AddproductComponent } from './addproduct/addproduct.component';
import { CartComponent } from './cart/cart.component';
import { RetailerdetailsComponent } from './retailerdetails/retailerdetails.component';
import { WishlistComponent } from './wishlist/wishlist.component';
const routes:Routes=[
  {path:'',component:HomepageComponent},
  {path:'login',component:LoginComponent},
  {path:'signUp',component:SignUpComponent},
  {path:'forgotPassword',component:ForgotPasswordComponent},
  {path:'admin',component:AdminDashBoardComponent},
  {path:'addRetailer',component:AddRetailerComponent},
  {path:'addCategory',component:AddCategoryComponent},
  {path:'verify/:id',component:VerifyProductComponent},
  {path:'profile',component:ProfileComponent,children:[{path:'personaldetails',component:PersonaldetailsComponent},{path:'',component:PersonaldetailsComponent},
  {path:'changePassword',component:ForgotPasswordComponent}]},
  {path:'products',component:ProductsComponent},
  {path:'**',component:PagenotfoundComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ProductComponent,
    ProfileComponent,
    PersonaldetailsComponent,
    ProductsComponent,
    PagenotfoundComponent,
    LoginComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    AdminDashBoardComponent,
    VerifyProductComponent,
    AddRetailerComponent,
    AddCategoryComponent,
    AddproductComponent,
    CartComponent,
    RetailerdetailsComponent,
    WishlistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [OtpService,UserService,ProductService,RetailerService,CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
