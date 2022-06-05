import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeworkComponent } from './homework.component';
import { HomeworkRoutingModule } from './homework-routing-module';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    HomeworkComponent
  ],
  imports: [
    CommonModule,
    HomeworkRoutingModule,
    SharedModule
  ]
})
export class HomeworkModule { }
