import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { GraphTemperatureComponent } from './graph-temperature/graph-temperature.component';
import { HomeComponent } from './home/home.component';
import { ReadComponent } from './read/read.component';
import { TestComponent } from './test/test.component';
import { ExcelComponent } from './excel/excel.component';
import { GraphHygrometrieComponent } from './graph-hygrometrie/graph-hygrometrie.component';

const routes: Routes = [
  {path:'create',component:CreateComponent},
  {path:'create/:time/:date',component:CreateComponent},
  {path:'read',component:ReadComponent},
  {path:'test',component:TestComponent},
  {path:'graphtemp',component:GraphTemperatureComponent},
  {path:'exportcsv',component:ExcelComponent},
  {path:'graphhygro',component:GraphHygrometrieComponent},
  {path:'',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
