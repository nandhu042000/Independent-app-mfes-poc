import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveWorksheetComponent } from './active-worksheet/active-worksheet.component';
import { DeactiveWorksheetComponent } from './deactive-worksheet/deactive-worksheet.component';
import { WorksheetComponent } from './worksheet.component';


const routes: Routes = [{
    path:'',component:WorksheetComponent,children:[{
        path:"active",component:ActiveWorksheetComponent
    },
    {
        path:"deactive",component:DeactiveWorksheetComponent
    }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorksheetRoutingModule { }
