import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login';
  login={
    username:"",
    password:""
  };
  emailEntered=false;
  constructor(private router:Router){}
  onNextClicked(){
    if(this.login.username==='nandhu.teacher' || this.login.username==='bhuvanesh.teacher')
      this.emailEntered=!this.emailEntered
    else{
      this.login.username=""
      alert("Enter a valid username!!")
    }
  }
  checkCredentials(){
    if(this.login.password==="12345"){
      this.login.username==="nandhu.teacher"? localStorage.setItem("teacher_id","1234"):localStorage.setItem("teacher_id","5678");
      localStorage.setItem("auth","true");
      localStorage.setItem("class","6a");
      localStorage.setItem("user_type","teacher");
      this.router.navigate(['/home']);
      // location.reload();
    }
  }
}
