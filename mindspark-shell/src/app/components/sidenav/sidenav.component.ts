import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  name: string = ""
  email: string =""
  space : string = ""
  constructor(private router: Router) { }
  logOut(){
    localStorage.clear()
    localStorage.setItem('auth','false')
    this.router.navigate(['/login'])
    location.reload()
  }
  ngOnInit(): void {
    localStorage.getItem('teacher_id') === "1234" ? this.name = "Nandha" : this.name = "Bhuvanesh"
    localStorage.getItem('teacher_id') === "1234" ? this.email = "nandha@ei-india.com" : this.email = "bhuvanesh@ei-india.com"

  }

}
