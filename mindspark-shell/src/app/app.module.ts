import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MyprofileComponent } from './components/myprofile/myprofile.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ContactCardComponent } from './components/contactus/contact-card/contact-card.component';
import { SocialLinksComponent } from './components/contactus/social-links/social-links.component';
import { AuthGaurd } from './authguard.service';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    SidenavComponent,
    MyprofileComponent,
    ContactusComponent,
    LogoutComponent,
    ContactCardComponent,
    SocialLinksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthGaurd],
  bootstrap: [AppComponent]
})
export class AppModule { }
