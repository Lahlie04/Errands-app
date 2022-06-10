import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './components/history/history.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './components/login/login.component';
import { PostingComponent } from './components/posting/posting.component';
import { RegisterComponent } from './components/register/register.component';
import { ServiceInfoComponent } from './components/service-info/service-info.component';
import { RunnerhomeComponent } from './components/runnerhome/runnerhome.component';
import { RequestsComponent } from './components/requests/requests.component';

const routes: Routes = [
  {path: '', component:LandingPageComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path: 'services', component:ServiceInfoComponent},
  {path: 'posting', component:PostingComponent},
  {path: 'history', component:HistoryComponent},
  {path: 'home', component:RunnerhomeComponent},
  {path: 'request', component:RequestsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
