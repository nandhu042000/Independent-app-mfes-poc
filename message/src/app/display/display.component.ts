import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  name:any;
  @Output() sentToApp = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  previewMessage(name:any){
    this.name = name
  }

  send(){
    this.sentToApp.emit(this.name)
  }
}
