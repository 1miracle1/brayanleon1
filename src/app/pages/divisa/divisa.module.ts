import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DivisaPageRoutingModule } from './divisa-routing.module';

import { DivisaPage } from './divisa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DivisaPageRoutingModule
  ],
  declarations: [DivisaPage]
})
export class DivisaPageModule {}
