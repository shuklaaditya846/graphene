import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentTopComponent } from './component-top/component-top.component';
import { ComponentMiddleComponent } from './component-middle/component-middle.component';
import { ComponentBottomComponent } from './component-bottom/component-bottom.component';
import { ComponentTopBarDeliveryComponent } from './component-top-bar-delivery/component-top-bar-delivery.component';
import { ComponentTopBarShopkartComponent } from './component-top-bar-shopkart/component-top-bar-shopkart.component';
import { ComponentTopContentComponent } from './component-top-content/component-top-content.component';
import { HeroBgComponent } from './hero-bg/hero-bg.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentTopComponent,
    ComponentMiddleComponent,
    ComponentBottomComponent,
    ComponentTopBarDeliveryComponent,
    ComponentTopBarShopkartComponent,
    ComponentTopContentComponent,
    HeroBgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
