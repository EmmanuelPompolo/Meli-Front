import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

// La ruta raiz es redirigido a la pagina dashboard, por ahora dashboard no tiene nada pero esta la posibilidad de que vaya creciendo
// Cada pagina tiene su propio module y routing para utilizar Lazy Loading
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
