import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicRoutingModule } from './topic-routing.module';
import { ActiveTopicComponent } from './active-topic/active-topic.component';
import { InnernavComponent } from '../shared/innernav/innernav.component';
import { SearchComponent } from '../shared/search/search.component';

import { TopicComponent } from './topic.component';
import { DeactivedTopicComponent } from './deactived-topic/deactived-topic.component';
import { CardComponent } from '../shared/card/card.component';



@NgModule({
  declarations: [
    ActiveTopicComponent,
    InnernavComponent,
    TopicComponent,
    DeactivedTopicComponent,
    SearchComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    TopicRoutingModule
  ]
})
export class TopicModule { }
