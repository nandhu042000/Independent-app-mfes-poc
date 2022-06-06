import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topic',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'home';
  user = {
      firstName:"",
      lastName:""
  }

  ngOnInit(): void {
      localStorage.getItem('teacher_id') === "1234" ? this.user = {...this.user,firstName:"Nandhu",lastName:"Teacher"} : this.user = {...this.user,firstName:"bhuvanesh",lastName:"Teacher"}
  }

  
}
