import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { IndexlayoutComponent } from './layout/indexlayout/indexlayout.component';
import {AdminlayoutComponent} from "./layout/adminlayout/adminlayout.component";

import { LayoutModule} from './layout/index';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  imports:      [ BrowserModule, FormsModule,AppRoutingModule,LayoutModule ],
  declarations: [ AppComponent, HelloComponent,IndexlayoutComponent,AdminlayoutComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
