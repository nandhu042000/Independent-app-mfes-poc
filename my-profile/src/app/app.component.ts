import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-profile';
  toEdit = true;

  details = {
    firstName:"",
    lastName:"teacher",
    email:"",
    DOB:"",
    gender:"",
    mobile:""
  }
  change(){
    this.toEdit=false
  }

  detailsChange(){
    if(localStorage.getItem('teacher_id') == "1234"){
      this.details = {...this.details,firstName:"Nandha",email:"nanda@ei-india.com",mobile:"7836524567"}
    }
    else{
      this.details = {...this.details,firstName:"Bhuvanesh",email:"bhuvanesh@ei-india.com",mobile:"7836524567"}

    }
  }

  ngOnInit(): void {
      this.detailsChange()
  }
}
