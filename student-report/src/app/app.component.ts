import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'student-report';
  addColumn:boolean = false;

  AddColumn(){
    this.addColumn = ! this.addColumn
  }
}
