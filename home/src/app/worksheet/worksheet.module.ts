import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorksheetComponent } from './worksheet.component';
import { WorksheetRoutingModule } from './worksheet-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ActiveWorksheetComponent } from './active-worksheet/active-worksheet.component';
import { DeactiveWorksheetComponent } from './deactive-worksheet/deactive-worksheet.component';



@NgModule({
  declarations: [
    WorksheetComponent,
    ActiveWorksheetComponent,
    DeactiveWorksheetComponent
  ],
  imports: [
    CommonModule,
    WorksheetRoutingModule,
    SharedModule
  ],
  providers: [WorksheetModule]
})
export class WorksheetModule { }
