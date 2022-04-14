import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { ReadComponent } from './read/read.component';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';
import { GraphTemperatureComponent } from './graph-temperature/graph-temperature.component';
import { ExcelComponent } from './excel/excel.component';

import {HttpClientModule} from '@angular/common/http';
import { ApiserviceService } from './apiservice.service';

import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Chart } from 'chart.js';
import { GraphHygrometrieComponent } from './graph-hygrometrie/graph-hygrometrie.component';






@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ReadComponent,
    HomeComponent,
    TestComponent,
    GraphTemperatureComponent,
    ExcelComponent,
    GraphHygrometrieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [ApiserviceService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
