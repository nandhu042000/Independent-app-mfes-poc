import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { innerNav } from './innernav.model';

@Component({
  selector: 'app-innernav',
  templateUrl: './innernav.component.html',
  styleUrls: ['./innernav.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InnernavComponent implements OnInit {
  nav:any;
  btnName:string = "";
  constructor(private router:Router) { }


  innerNavCreate(){
    if(this.router.url.includes('topics')){
      this.nav = innerNav.Topics.list
      this.btnName = innerNav.Topics.btnName
    }
    else if(this.router.url.includes('homework')){
      this.nav = innerNav.Homework.list
      this.btnName = innerNav.Homework.btnName
    }
    else if(this.router.url.includes('worksheet')){
      this.nav = innerNav.Worksheet.list
      this.btnName = innerNav.Worksheet.btnName
    }
  }

  
  ngOnInit(): void {
      
    this.innerNavCreate()

  }

 

  btnAction(){
    
  }

}
