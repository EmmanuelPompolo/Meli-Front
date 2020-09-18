import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';



@NgModule({
  declarations: [
    ProductComponent,
    BreadcrumbComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductComponent,
    BreadcrumbComponent
  ],
  providers: []
})
export class SharedModule { }
