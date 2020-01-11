import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserPagesComponent } from './pages/user-pages/user-pages.component';
import { UserDetailsComponent } from './component/user-details/user-details.component';
import { LoginComponent } from './component/login/login.component';
import { DetailComponent } from './pages/detail/detail.component';
import { User1DetailComponent } from './component/user1-detail/user1-detail.component';


const routes: Routes = [
{ path: 'user', component: UserPagesComponent},
{path: 'home', component: LoginComponent},
{path: 'detail', component: DetailComponent},
{path: '4', component: DetailComponent},
{path: '1', component: User1DetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
