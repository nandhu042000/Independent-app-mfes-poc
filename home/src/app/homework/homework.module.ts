import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeworkComponent } from './homework.component';
import { HomeworkRoutingModule } from './homework-routing-module';
import { SharedModule } from '../shared/shared.module';
import { ActiveHomeworkComponent } from './active-homework/active-homework.component';
import { DeactivateHomeworkComponent } from './deactivate-homework/deactivate-homework.component';




@NgModule({
  declarations: [
    HomeworkComponent,
    ActiveHomeworkComponent,
    DeactivateHomeworkComponent
  ],
  imports: [
    CommonModule,
    HomeworkRoutingModule,
    SharedModule
  ]
})
export class HomeworkModule { }
