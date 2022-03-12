import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { C2Component } from './c2/c2.component';



@NgModule({
  declarations: [
    ForgotPasswordComponent,
    C2Component
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ForgotPasswordComponent,
    C2Component
  ]
})
export class AuthModule { }
