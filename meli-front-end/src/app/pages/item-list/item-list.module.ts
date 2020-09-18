import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemListRoutingModule } from './item-list-routing.module';
import { ItemListComponent } from './item-list.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  imports: [
    CommonModule,
    ItemListRoutingModule,
    SharedModule
  ],
  declarations: [ItemListComponent]
})
export class ItemListModule { }
