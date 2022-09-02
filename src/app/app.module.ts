import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForgotPasswordComponent } from './Component/forgot-password/forgot-password.component';
import { LoginComponent } from './Component/Login/Login.component';
import { NotFoundComponent } from './Component/not-found/not-found.component';
import { RegisterComponent } from './Component/register/register.component';




@NgModule({
  declarations: [
    AppComponent,

    LoginComponent,
    ForgotPasswordComponent,
    NotFoundComponent,
    RegisterComponent,


   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
