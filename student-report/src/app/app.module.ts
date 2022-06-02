import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableReportComponent } from './components/table-report/table-report.component';
import { SearchComponent } from './search/search.component';
import { FilterComponent } from './filter/filter.component';
import { ViewsComponent } from './views/views.component';
import { ColumnsComponent } from './columns/columns.component';
@NgModule({
  declarations: [
    AppComponent,
    TableReportComponent
    SearchComponent,
    FilterComponent,
    ViewsComponent,
    ColumnsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
