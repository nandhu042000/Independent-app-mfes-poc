import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  content =[ {
    title:"Talk to us",
    data:"1800-102-8885",
    link:false,
    classname:"tele"
  },
  {
    title:"Message us",
    data:"New message",
    link:true,
    classname:"message"
  },
  {
    title:"Mail us",
    data:"mindspark@ei-india.com",
    link:false,
    classname:"mail"
  },
]
  constructor() { }

  ngOnInit(): void {
  }

}
