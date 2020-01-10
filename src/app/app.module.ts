import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserJsonComponent } from './user-json/user-json.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { UserComponent } from './component/user/user.component';
import { UserPagesComponent } from './pages/user-pages/user-pages.component';
import { User2Component } from './component/user2/user2.component';
import { LoginComponent } from './component/login/login.component';
import { UserDetailsComponent } from './component/user-details/user-details.component';
import { HeaderComponent } from './component/header/header.component';
import { DetailComponent } from './pages/detail/detail.component';
import { UserDetails2Component } from './component/user-details2/user-details2.component';

@NgModule({
  declarations: [
    AppComponent,
    UserJsonComponent,
    UserComponent,
    UserPagesComponent,
    User2Component,
    LoginComponent,
    UserDetailsComponent,
    HeaderComponent,
    DetailComponent,
    UserDetails2Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
