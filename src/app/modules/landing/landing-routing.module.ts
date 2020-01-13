import { LandingComponent } from './landing.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './index/index.component';
import {AboutComponent} from './about/about.component';
const routes: Routes = [
  { path: '', component: LandingComponent },
 { path: 'index', component: IndexComponent },
 { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule {}