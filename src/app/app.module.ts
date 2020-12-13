import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ResetcredentialsComponent } from './components/resetcredentials/resetcredentials.component';
import { RegistrationconfirmationComponent } from './components/registrationconfirmation/registrationconfirmation.component';
import { ResetcredentialconfirmationComponent } from './components/resetcredentialconfirmation/resetcredentialconfirmation.component';
import { UpdateprofileComponent } from './components/updateprofile/updateprofile.component';
import { EballotComponent } from './components/eballot/eballot.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { EballotconfirmationComponent } from './components/eballotconfirmation/eballotconfirmation.component';
import { EballotcloseComponent } from './components/eballotclose/eballotclose.component';
import { EIdviewComponent } from './components/e-idview/e-idview.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegistrationComponent,
    ResetcredentialsComponent,
    RegistrationconfirmationComponent,
    ResetcredentialconfirmationComponent,
    UpdateprofileComponent,
    EballotComponent,
    EballotconfirmationComponent,
    EballotcloseComponent,
    EIdviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
