import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  name: string = "Umeshjoshi Teacher"
  email: string ="umeshjoshi@ei-india.com"
  space : string = ""
  constructor() { }

  ngOnInit(): void {
  }

}
