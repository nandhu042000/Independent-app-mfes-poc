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

  ngOnInit(): void {
      if(this.router.url.includes('topics')){
        this.nav = innerNav.Topics.list
        this.btnName = innerNav.Topics.btnName
      }
  }

  btnAction(){
    
  }

}
