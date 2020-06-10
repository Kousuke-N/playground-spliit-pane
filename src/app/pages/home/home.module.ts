import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { HomeListPageModule } from './home-list/home-list.module';
import { ServicesModule } from 'src/app/services/services.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HomeListPageModule,
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
