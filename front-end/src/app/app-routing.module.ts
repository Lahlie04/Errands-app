import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ServiceInfoComponent } from './components/service-info/service-info.component';
import { RunnerhomeComponent } from './components/runnerhome/runnerhome.component';

const routes: Routes = [
  {path: '', component:LandingPageComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path: 'services', component:ServiceInfoComponent},
  {path: 'home', component:RunnerhomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
