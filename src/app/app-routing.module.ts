import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { IndexlayoutComponent } from "./layout/indexlayout/indexlayout.component";
import {AdminlayoutComponent} from "./layout/adminlayout/adminlayout.component";

const routes: Routes = [
  //Site routes goes here
  {
    path: "",
    component: IndexlayoutComponent,
    loadChildren: './modules/landing/landing.module#LandingModule',
    data: { preload: false, delay: false }
  },
  {
    path: 'admin',
    component: AdminlayoutComponent,
    loadChildren: './modules/admin/admin.module#AdminModule',
    data: { preload: false, delay: false }
  },
  // otherwise redirect to home
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}