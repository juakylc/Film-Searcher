import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MenubarModule} from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { StartComponent } from './components/start/start.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CardModule } from 'primeng/card';
import { SharedModule } from 'primeng/api';
import {​​InputTextModule}​​ from 'primeng/inputtext';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    StartComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    FormsModule,
    HttpClientModule,
    ButtonModule,
    InputTextModule,
    CardModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
