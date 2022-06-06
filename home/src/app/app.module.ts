import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { HomeworkModule } from './homework/homework.module';
import { TopicModule } from './topic/topic.module';

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
    HomeworkModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
