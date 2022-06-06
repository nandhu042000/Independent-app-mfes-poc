import { Component, OnInit } from '@angular/core';
import { Router,Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Mindspark_Demo';
  auth:boolean = false;
  nav:boolean = false;
  constructor(private router:Router){}
    ngOnInit(): void {

        this.router.events.subscribe((event: Event) => {
          if (event instanceof NavigationEnd) {
              this.auth = localStorage.getItem('auth') == 'true' ? true : false;
              location.href.includes("login") == true ? this.nav == false : this.nav = true;
              console.log(location.href.includes('login'));
          }
  

      });
    }
    
}
