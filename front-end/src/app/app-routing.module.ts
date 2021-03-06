import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './components/history/history.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './components/login/login.component';
import { PostingComponent } from './components/posting/posting.component';
import { RegisterComponent } from './components/register/register.component';
import { ServiceInfoComponent } from './components/service-info/service-info.component';
import { RunnerhomeComponent } from './components/runnerhome/runnerhome.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { EarningsComponent } from './components/earnings/earnings.component';

import { RequestsComponent } from './components/requests/requests.component';
import { RatingsComponent } from './components/ratings/ratings.component';


const routes: Routes = [
  {path: '', component:LandingPageComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path: 'services', component:ServiceInfoComponent},
  {path: 'home', component:RunnerhomeComponent},
  {path: 'nav', component:NavbarComponent},
  {path: 'Jobs', component:JobsComponent},
  {path: 'Earn', component:EarningsComponent},
  {path: 'posting', component:PostingComponent},
  {path: 'history', component:HistoryComponent},
  {path: 'request', component:RequestsComponent},
  {path: 'ratings', component:RatingsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
