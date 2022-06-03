import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { MessageAreaComponent } from './message-area/message-area.component';
import { MessageChipsComponent } from './message-chips/message-chips.component';
import { PreviewMessageComponent } from './preview-message/preview-message.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    MessageAreaComponent,
    MessageChipsComponent,
    PreviewMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
