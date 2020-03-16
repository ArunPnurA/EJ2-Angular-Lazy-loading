import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { GridModule } from '@syncfusion/ej2-angular-grids';

@NgModule({
  imports: [
    CommonModule,
    OrdersRoutingModule,
    GridModule
  ],
  declarations: [OrdersComponent]
})
export class OrdersModule { }
