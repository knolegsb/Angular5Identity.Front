import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppConfig } from './app.config';
import { AuthGuard } from './_guards/auth.guard';
import { AlertService } from './_services/alert.service';
import { UserService } from './_services/user.service';
import { AuthenticationService } from './_services/authentication.service';
import { AlertComponent } from './_directives/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AlertComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    AppConfig,
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
