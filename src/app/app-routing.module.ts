import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './ui/home/home.component';
import {CategoryComponent} from './ui/category/category.component';
import {FooterComponent} from './ui/footer/footer.component';
import {HeaderComponent} from './ui/header/header.component';
import {LayoutComponent} from './ui/layout/layout.component';
import {LoginComponent} from './login/login.component';
import {VideogularComponent} from './videogular/videogular.component';
import { AuthGuard } from './guard/auth-guard';
import {ModalComponent} from './ui/modal/modal.component';
import {RegisterComponent} from './register/register.component';
import {UserComponent} from './ui/user/user.component';
import {OneCategoryComponent} from './ui/one-category/one-category.component';
import {MyListComponent} from './ui/my-list/my-list.component';

const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'category', component: CategoryComponent, canActivate: [AuthGuard]},
  {path: 'category/:categoryId', component: OneCategoryComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'videogular', component: VideogularComponent, canActivate: [AuthGuard]},
  {path: 'modal', component: ModalComponent, canActivate: [AuthGuard]},
  {path: 'register', component: RegisterComponent},
  {path: 'my_user', component: UserComponent, canActivate: [AuthGuard]},
  {path: 'my_list', component: MyListComponent, canActivate: [AuthGuard]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routingComponents = [CategoryComponent, FooterComponent, HeaderComponent, HomeComponent, LayoutComponent, LoginComponent];
