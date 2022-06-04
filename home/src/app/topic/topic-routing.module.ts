import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveTopicComponent } from './active-topic/active-topic.component';
import { DeactivedTopicComponent } from './deactived-topic/deactived-topic.component';
import { TopicComponent } from './topic.component';

const routes: Routes = [{path:"",component:TopicComponent,
children:[{
 path:"active",component:ActiveTopicComponent,
},{
 path:"deactivate",component:DeactivedTopicComponent

}]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopicRoutingModule { }
