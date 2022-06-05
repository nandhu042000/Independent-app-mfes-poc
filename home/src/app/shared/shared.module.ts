import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InnernavComponent } from './components/innernav/innernav.component';
import { RouterModule } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { SearchComponent } from './components/search/search.component';



@NgModule({
  declarations: [
    InnernavComponent,
    CardComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,RouterModule
  ],
  exports: [
  
    InnernavComponent,
       CardComponent,
       SearchComponent
  ]
  
})
export class SharedModule { }
