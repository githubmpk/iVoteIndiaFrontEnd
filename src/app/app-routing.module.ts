import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { RegistrationconfirmationComponent } from './components/registrationconfirmation/registrationconfirmation.component';
import { ResetcredentialconfirmationComponent } from './components/resetcredentialconfirmation/resetcredentialconfirmation.component';
import { ResetcredentialsComponent } from './components/resetcredentials/resetcredentials.component';
import { UpdateprofileComponent } from './components/updateprofile/updateprofile.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'login', 
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
 },
  {
     path: 'home',
     component: HomeComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'resetcredentials',
    component: ResetcredentialsComponent
  },
  {
    path: 'registrationconfirmation',
    component: RegistrationconfirmationComponent
  },
  {
    path: 'resetcredentialconfirmation',
    component: ResetcredentialconfirmationComponent
  },
  {
    path: 'updateprofile',
    component: UpdateprofileComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
    }),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
