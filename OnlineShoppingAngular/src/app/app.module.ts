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

const routes:Routes=[
  {path:'',component:HomepageComponent},
  {path:'login',component:LoginComponent},
  {path:'signUp',component:SignUpComponent},
  {path:'forgotPassword',component:ForgotPasswordComponent},
  {path:'admin',component:AdminDashBoardComponent},
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
    AdminDashBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [OtpService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
