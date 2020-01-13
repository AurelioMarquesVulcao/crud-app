import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserPagesComponent } from './pages/user-pages/user-pages.component';
import { LoginComponent } from './component/login/login.component';
import { EdituserComponent } from './pages/edituser/edituser.component';


const routes: Routes = [
{ path: 'user', component: UserPagesComponent},
{path: 'home', component: LoginComponent},
{path: 'new', component: EdituserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
