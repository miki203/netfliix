import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UiModule} from './ui/ui.module';
import {HttpClientModule} from '@angular/common/http';
import {MaterialModule} from './material-module';
import {Routes} from '@angular/router';
import {HomeComponent} from './ui/home/home.component';
import {CategoryComponent} from './ui/category/category.component';
import {LoginComponent} from './login/login.component';
import { VideogularComponent } from './videogular/videogular.component';
import {AuthGuard} from './guard/auth-guard';
import {ModalService} from './_services/ModalService';
import { RegisterComponent } from './register/register.component';

const appRoutes: Routes = [
  { path: 'category', component: CategoryComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VideogularComponent,
    RegisterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,

    BrowserModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule
  ],
  exports: [
    AppComponent,
  ],
  providers: [
    AuthGuard,
    ModalService,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
