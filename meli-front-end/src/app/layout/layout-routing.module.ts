import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

// The root path is redirected to the dashboard page, for now the dashboard has nothing but there is the possibility that it will grow
// Each page has its own module and routing to use Lazy Loading
const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', loadChildren: () => import('../pages/dashboard/dashboard.module').then(mod => mod.DashboardModule) },
      { path: 'items', loadChildren: () => import('../pages/item-list/item-list.module').then(mod => mod.ItemListModule)},
      { path: 'items/:id', loadChildren: () => import('../pages/item-detail/item-detail.module').then(mod => mod.ItemDetailModule)}
    ]
  }
];

@NgModule({
 imports: [RouterModule.forChild(routes)],
 exports: [RouterModule]
})
export class LayoutRoutingModule { }
