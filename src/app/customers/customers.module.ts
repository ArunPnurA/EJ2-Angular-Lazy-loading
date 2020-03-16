import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
@NgModule({
  imports: [
    CommonModule,
    CustomersRoutingModule,
    CalendarModule
  ],
  declarations: [CustomersComponent]
})
export class CustomersModule { }
