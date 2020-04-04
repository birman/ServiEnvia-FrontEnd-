import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentLayoutComponent } from './content-layout.component';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { CustomerViewModule } from '../features/customer-view/customer-view.module';
import { PackageViewModule } from '../features/package-view/package-view.module';



@NgModule({
  declarations: [ContentLayoutComponent],
  imports: [
    CommonModule,
    LayoutModule,
    CustomerViewModule,
    PackageViewModule
  ]
})
export class ContentLayoutModule { }
