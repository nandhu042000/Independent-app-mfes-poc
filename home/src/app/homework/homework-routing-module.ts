import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveHomeworkComponent } from './active-homework/active-homework.component';
import { DeactivateHomeworkComponent } from './deactivate-homework/deactivate-homework.component';
import { HomeworkComponent } from './homework.component';


const routes: Routes = [{
    path:'',component:HomeworkComponent,
    children:[{
      path:"active", component:ActiveHomeworkComponent
    },{
      path:"deactivate", component:DeactivateHomeworkComponent
    }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeworkRoutingModule { }
