import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopicModule } from './topic/topic.module';
import { InnernavComponent } from './shared/innernav/innernav.component';
import { SearchComponent } from './shared/search/search.component';
import { CardComponent } from './shared/card/card.component';
import { WorksheetModule } from './worksheet/worksheet.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TopicModule,
    WorksheetModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
