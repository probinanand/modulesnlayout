import { LandingComponent } from './landing.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRoutingModule } from './landing-routing.module';
import {IndexComponent} from './index/index.component';
import {AboutComponent} from './about/about.component';
@NgModule({
  imports: [
    CommonModule,
    LandingRoutingModule
    ],
  declarations: [LandingComponent,IndexComponent,AboutComponent]
})
export class LandingModule {}