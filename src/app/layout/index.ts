import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexheaderComponent} from './indexheader/indexheader.component';
import {IndexfooterComponent} from './indexfooter/indexfooter.component';
import {AdminheaderComponent} from './adminheader/adminheader.component';
import {AdminfooterComponent} from './adminfooter/adminfooter.component';
import {AdminmenuComponent} from './adminmenu/adminmenu.component';

import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    // components
    IndexheaderComponent,
    IndexfooterComponent,
    AdminheaderComponent,
    AdminmenuComponent,
    AdminfooterComponent
     ],
  exports: [
    IndexheaderComponent,
    IndexfooterComponent,
    AdminheaderComponent,
    AdminmenuComponent,
    AdminfooterComponent
    ],
  imports: [ RouterModule]
})
export class LayoutModule {}