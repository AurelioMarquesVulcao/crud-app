import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserPagesComponent } from './pages/user-pages/user-pages.component';
import { UserDetailsComponent } from './component/user-details/user-details.component';
import { LoginComponent } from './component/login/login.component';
import { User1DetailComponent } from './component/user1-detail/user1-detail.component';
import { User2Component } from './component/user2/user2.component';
import { NewComponent } from './component/new/new.component';
import { UpdateComponent } from './component/update/update.component';


const routes: Routes = [
{ path: 'user', component: UserPagesComponent},
{path: 'home', component: LoginComponent},
{path: 'new', component: NewComponent},
{path: 'update', component: UpdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
