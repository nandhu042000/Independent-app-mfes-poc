import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorksheetComponent } from './worksheet.component';
import { WorksheetRoutingModule } from './worksheet-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    WorksheetComponent
  ],
  imports: [
    CommonModule,
    WorksheetRoutingModule,
    SharedModule
  ]
})
export class WorksheetModule { }
