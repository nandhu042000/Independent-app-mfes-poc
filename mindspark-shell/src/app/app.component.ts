import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Mindspark_Demo';
  auth:boolean = false;
    ngOnInit(): void {
        this.auth = localStorage.getItem('auth') == 'true' ? true : false;
    }
}
