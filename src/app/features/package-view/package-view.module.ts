import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackageViewComponent } from './package-view.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DialogsModule } from '@progress/kendo-angular-dialog';



@NgModule({
  declarations: [PackageViewComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    DateInputsModule,
    InputsModule,
    DialogsModule
  ],
  exports: [PackageViewComponent]
})
export class PackageViewModule { }
