import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicRoutingModule } from './topic-routing.module';
import { ActiveTopicComponent } from './active-topic/active-topic.component';


import { TopicComponent } from './topic.component';
import { DeactivedTopicComponent } from './deactived-topic/deactived-topic.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ActiveTopicComponent,
    
    TopicComponent,
    DeactivedTopicComponent,

  ],
  imports: [
    CommonModule,
    TopicRoutingModule,
    SharedModule
  ]
})
export class TopicModule { }
