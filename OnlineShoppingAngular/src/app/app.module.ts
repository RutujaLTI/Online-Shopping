import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AdminDashBoardComponent } from './admin-dash-board/admin-dash-board.component';
import { OtpService } from './services/OtpService';
import { UserService } from './services/UserService';

const routes:Routes=[
  {
    path:'login',component:LoginComponent
  },
  {
    path:'signUp',component:SignUpComponent
  },
  {
    path:'forgotPassword',component:ForgotPasswordComponent
  },
  {
    path:'admin',component:AdminDashBoardComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
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
