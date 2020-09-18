import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemDetailComponent } from './item-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ItemDetailRoutingModule } from './item-detail-routing.module';



@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ItemDetailRoutingModule
  ],
  declarations: [ItemDetailComponent]
})
export class ItemDetailModule { }
