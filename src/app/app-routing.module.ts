import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContentLayoutComponent } from './content-layout/content-layout.component';
import { ContentLayoutModule } from './content-layout/content-layout.module';

const routes: Routes = [
  {
    path: "",
    redirectTo: "main",
    pathMatch: "full"
  },
  {
    path: "main",
    component: ContentLayoutComponent,
  },
  {
    path: "**",
    redirectTo: "main"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ContentLayoutModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
