import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentLayoutComponent } from './content-layout.component';
import { LayoutModule } from '@progress/kendo-angular-layout';



@NgModule({
  declarations: [ContentLayoutComponent],
  imports: [
    CommonModule,
    LayoutModule
  ]
})
export class ContentLayoutModule { }
