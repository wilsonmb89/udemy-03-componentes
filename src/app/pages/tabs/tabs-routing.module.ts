import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      { path: 'account', loadChildren: () => import('../avatar/avatar.module').then( m => m.AvatarPageModule ) },
      { path: 'contact', loadChildren: () => import('../list-reorder/list-reorder.module').then( m => m.ListReorderPageModule ) },
      { path: 'settings', loadChildren: () => import('../infinite-scroll/infinite-scroll.module').then( m => m.InfiniteScrollPageModule ) },
      { path: '', redirectTo: '/tabs/account', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
