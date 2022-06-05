import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeworkComponent } from './homework.component';
import { HomeworkRoutingModule } from './homework-routing-module';
import { InnernavComponent } from '../shared/innernav/innernav.component';
import { SearchComponent } from '../shared/search/search.component';
import { CardComponent } from '../shared/card/card.component';




@NgModule({
  declarations: [
    HomeworkComponent,
    InnernavComponent,
    SearchComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    HomeworkRoutingModule
  ]
})
export class HomeworkModule { }
