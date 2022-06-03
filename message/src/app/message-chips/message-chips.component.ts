import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-message-chips',
  templateUrl: './message-chips.component.html',
  styleUrls: ['./message-chips.component.scss']
})
export class MessageChipsComponent implements OnInit {
  @Output() previewMessage = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  message(){
    this.previewMessage.emit({messageid:1,flag:true})
    
  }
}
