import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { UserComponent } from './component/user/user.component';
import { UserPagesComponent } from './pages/user-pages/user-pages.component';
import { LoginComponent } from './component/login/login.component';
import { HeaderComponent } from './component/header/header.component';

import { NewComponent } from './component/new/new.component';
import { from } from 'rxjs';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderloginComponent } from './component/headerlogin/headerlogin.component';
import { EdituserComponent } from './pages/edituser/edituser.component';
import { AuthService } from './component/login/auth.service';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserPagesComponent,
    LoginComponent,
    HeaderComponent,
    NewComponent,
    FooterComponent,
    HeaderloginComponent,
    EdituserComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CollapseModule.forRoot(),
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [HttpClient, HttpClientModule, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
