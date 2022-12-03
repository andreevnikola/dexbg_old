import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveDeliveriesComponent } from './active-deliveries/active-deliveries.component';
import { SharedModule } from '../shared/shared.module'
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnsweredDeliveriesComponent } from './answered-deliveries/answered-deliveries.component'


@NgModule({
  declarations: [
    ActiveDeliveriesComponent,
    AnsweredDeliveriesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  exports: [
    ActiveDeliveriesComponent,
    AnsweredDeliveriesComponent
  ],
})
export class DeliveriesModule { }
