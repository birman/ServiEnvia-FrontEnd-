import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackageViewComponent } from './package-view.component';



@NgModule({
  declarations: [PackageViewComponent],
  imports: [
    CommonModule
  ],
  exports: [PackageViewComponent]
})
export class PackageViewModule { }
