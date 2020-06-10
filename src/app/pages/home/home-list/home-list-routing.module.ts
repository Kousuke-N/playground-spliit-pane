import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeListPage } from './home-list.page';

const routes: Routes = [
  {
    path: '',
    component: HomeListPage
  },
  {
    path: ':id',
    loadChildren: () => import('../home-detail/home-detail.module').then(m => m.HomeDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeListPageRoutingModule {}
