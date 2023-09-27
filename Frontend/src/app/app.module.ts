import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddDoctorComponent } from './components/add-doctor/add-doctor.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UpdateSurgeryComponent } from './components/update-surgery/update-surgery.component';
import { UpdateDoctorComponent } from './components/update-doctor/update-doctor.component';
import { RegistrationPageComponent } from './pages/registration-page/registration-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';


import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { ViewDoctorComponent } from './components/view-doctor/view-doctor.component';
import { ViewSpecializationComponent } from './components/view-specialization/view-specialization.component';
import { ViewTodaysSurgeryComponent } from './components/view-todays-surgery/view-todays-surgery.component';
import {  HttpClientModule } from "@angular/common/http";
import { FooterComponent } from './components/footer/footer.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { HomePageComponent } from './components/home-page/home-page.component';


@NgModule({
  declarations: [
    AppComponent,
    AddDoctorComponent,
    NavbarComponent,
    UpdateSurgeryComponent,
    ViewDoctorComponent,
    ViewSpecializationComponent,
    ViewTodaysSurgeryComponent,
    UpdateDoctorComponent,
    LoginPageComponent,
    RegistrationPageComponent,
    FooterComponent,
    HomePageComponent,
    SpinnerComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
