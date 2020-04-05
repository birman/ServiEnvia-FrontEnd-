import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerViewComponent } from './customer-view.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DialogsModule } from '@progress/kendo-angular-dialog';


@NgModule({
  declarations: [CustomerViewComponent],
  imports: [
    CommonModule,
    BrowserModule,
     FormsModule,
     DateInputsModule,
     InputsModule,
     DialogsModule
  ],
  exports: [CustomerViewComponent]
})
export class CustomerViewModule { }
