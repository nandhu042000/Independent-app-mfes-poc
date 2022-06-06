import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Router,Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewInit {
  title = 'Mindspark_Demo';
  auth:boolean = false;
  nav:boolean = false;
  @ViewChildren('select')
  select!: QueryList<any>;

  constructor(private router:Router){}
  
  selectClass(event:any){
      localStorage.setItem('class',event.target.value);
  }
    ngOnInit(): void {

        this.router.events.subscribe((event: Event) => {
          if (event instanceof NavigationEnd) {
              this.auth = localStorage.getItem('auth') == 'true' ? true : false;
              location.href.includes("login") == true ? this.nav == false : this.nav = true;
            }
      });
    }

    ngAfterViewInit() {
      this.select.changes.subscribe((data: QueryList <any>) =>
        {
            data.first.nativeElement.value = localStorage.getItem('class')
        });
    }
    
}
