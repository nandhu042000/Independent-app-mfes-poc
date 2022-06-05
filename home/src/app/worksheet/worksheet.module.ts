import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorksheetComponent } from './worksheet.component';
import { WorksheetRoutingModule } from './worksheet-routing.module';



@NgModule({
  declarations: [
    WorksheetComponent,

  ],
  imports: [
    CommonModule,
    WorksheetRoutingModule
  ]
})
export class WorksheetModule { }
