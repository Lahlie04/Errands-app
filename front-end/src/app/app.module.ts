import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ServiceInfoComponent } from './components/service-info/service-info.component';
import { PostingComponent } from './components/posting/posting.component';
import { HistoryComponent } from './components/history/history.component';
import { RunnerhomeComponent } from './components/runnerhome/runnerhome.component';
import { RequestsComponent } from './components/requests/requests.component';
import { RatingsComponent } from './components/ratings/ratings.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { EarningsComponent } from './components/earnings/earnings.component';
import { Nav2Component } from './components/nav2/nav2.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    RegisterComponent,
    LoginComponent,
    ServiceInfoComponent,
       PostingComponent,
       HistoryComponent,
       RunnerhomeComponent,
       RequestsComponent,
       RatingsComponent,
       NavbarComponent,
       JobsComponent,
       EarningsComponent,
       Nav2Component
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
