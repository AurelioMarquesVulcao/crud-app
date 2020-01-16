import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserPagesComponent } from './pages/user-pages/user-pages.component';
import { LoginComponent } from './component/login/login.component';
import { EdituserComponent } from './pages/edituser/edituser.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
{path: 'user', component: UserPagesComponent, canActivate: [AuthGuard]},
{path: 'new', component: EdituserComponent},
{path: '', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
