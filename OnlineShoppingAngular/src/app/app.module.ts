import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgxWebstorageModule } from 'ngx-webstorage';

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
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavComponent } from './shared/nav/nav.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { FilterComponent } from './shopping-cart/filter/filter.component';
import { ProductListComponent } from './shopping-cart/product-list/product-list.component';
import { ProductItemComponent } from './shopping-cart/product-list/product-item/product-item.component';
import { ProductDescriptionComponent } from './shopping-cart/product-list/product-item/product-description/product-description.component';
import { CompareComponent } from './compare/compare.component';
import { CompareProductsService } from './services/CompareProductsService';
import { SessionService } from './services/sessionService';
import { AdminAuthGuardService } from './services/admin-auth-guard.service';
import { WishListComponent } from './wish-list/wish-list.component';
const routes:Routes=[
  {path:'',component:ShoppingCartComponent},
  {path:'ViewDetails/:id', component:ProductDescriptionComponent},
  {path:'login',component:LoginComponent},
  {path:'signUp',component:SignUpComponent},
  {path:'forgotPassword',component:ForgotPasswordComponent},
  {path:'admin',component:AdminDashBoardComponent,canActivate:[AdminAuthGuardService]},
  {path:'addRetailer',component:AddRetailerComponent,canActivate:[AdminAuthGuardService]},
  {path:'addCategory',component:AddCategoryComponent,canActivate:[AdminAuthGuardService]},
  {path:'verify/:id',component:VerifyProductComponent,canActivate:[AdminAuthGuardService]},
  {path:'wishList',component:WishListComponent},
  {path:'profile',component:ProfileComponent,children:[{path:'personaldetails',component:PersonaldetailsComponent},{path:'',component:PersonaldetailsComponent},
  {path:'changePassword',component:ForgotPasswordComponent}]},
  {path:'products',component:ProductsComponent},
  {path:'compare',component:CompareComponent},
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
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ShoppingCartComponent,
    FilterComponent,
    ProductListComponent,
    ProductItemComponent,
    ProductDescriptionComponent,
    CompareComponent,
    WishListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,NgxWebstorageModule.forRoot()
  ],
  providers: [OtpService,UserService,ProductService,RetailerService,CategoryService,CompareProductsService,SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
