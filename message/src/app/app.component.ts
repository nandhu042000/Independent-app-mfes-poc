import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'message';
  messageFlag:boolean = false
  innerWidth = 0;
  btnName:string = "New Message";
  prevMessageFlag:boolean = false;
  smallViewFlag:boolean = false;
  @HostListener('window:resize',['$event'])
  onResize($event:any){
    this.innerWidth = window.innerWidth
  }
  changeBtn(){
    if(this.innerWidth <= 740){
        this.smallViewFlag = !this.smallViewFlag 
        
    }
    this.messageFlag = !this.messageFlag;
    this.btnName = this.messageFlag ? "Cancel" : "New Message";
    this.prevMessageFlag = false
  }
  discard(){
    if(this.innerWidth < 740){
      this.smallViewFlag = ! this.smallViewFlag
      this.prevMessageFlag = ! this.prevMessageFlag
    }
  }
  ngOnInit(): void {
    this.onResize(event);
    if(this.innerWidth < 740){
        this.smallViewFlag = true
    }
  }

  sentToApp(message: any){
    console.log(message)
    if(this.innerWidth < 740){
      this.prevMessageFlag = message.flag
      this.smallViewFlag = ! this.smallViewFlag
    }
    else{ 
      this.prevMessageFlag = message.flag
      this.messageFlag = false
    }
    
    
  }

}
