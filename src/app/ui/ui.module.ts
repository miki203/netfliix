import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {HomeComponent} from './home/home.component';
import { CategoryComponent } from './category/category.component';

import { AppRoutingModule } from '../app-routing.module';
import {ModalService} from '../_services/ModalService';
import {ModalComponent} from './modal/modal.component';
import {UserService} from '../services/user.service';
import {MovieTransferService} from '../services/movie-transfer.service';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CategoryComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  exports: [
    AppRoutingModule,
    LayoutComponent,
  ],
  providers: [
    ModalService,
    MovieTransferService,
  ]

})
export class UiModule { }
