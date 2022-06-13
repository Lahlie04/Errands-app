import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ServiceInfoComponent } from './components/service-info/service-info.component';
import { RunnerhomeComponent } from './components/runnerhome/runnerhome.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { EarningsComponent } from './components/earnings/earnings.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    RegisterComponent,
    LoginComponent,
  
    ServiceInfoComponent,
       RunnerhomeComponent,
       NavbarComponent,
       JobsComponent,
       EarningsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
