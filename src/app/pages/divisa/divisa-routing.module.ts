import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DivisaPage } from './divisa.page';

const routes: Routes = [
  {
    path: '',
    component: DivisaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DivisaPageRoutingModule {}
