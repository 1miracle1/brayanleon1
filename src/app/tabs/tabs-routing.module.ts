import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./../pages/home/home.module').then((m) => m.HomePageModule)
      },
      {
        path: 'clothing',
        loadChildren: () =>
          import('../pages/clothing/clothing.module').then((m) => m.ClothingPageModule)
      },
      {
        path: 'games',
        loadChildren: () =>
          import('./../pages/games/games.module').then((m) => m.GamesPageModule)
      },
      {
        path: 'divisa',
        loadChildren: () =>
          import('./../pages/divisa/divisa.module').then((m) => m.DivisaPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class TabsPageRoutingModule {}
