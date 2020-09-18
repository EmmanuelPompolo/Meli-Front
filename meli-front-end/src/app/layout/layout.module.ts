import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HeaderSeachComponent } from './header-seach/header-seach.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    LayoutRoutingModule,
    FormsModule,
  ],
  declarations: [
     LayoutComponent,
     HeaderSeachComponent
  ],
})
export class LayoutModule { }
