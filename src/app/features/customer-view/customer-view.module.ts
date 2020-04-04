import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerViewComponent } from './customer-view.component';



@NgModule({
  declarations: [CustomerViewComponent],
  imports: [
    CommonModule
  ],
  exports: [CustomerViewComponent]
})
export class CustomerViewModule { }
