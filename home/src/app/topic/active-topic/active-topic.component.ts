import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router,Event } from '@angular/router';
import { TopicServiceService } from '../topic-service.service';

@Component({
  selector: 'app-active-topic',
  templateUrl: './active-topic.component.html',
  styleUrls: ['./active-topic.component.css'],

})
export class ActiveTopicComponent implements OnInit {

  constructor(private topicservice:TopicServiceService,private router:Router) { }
  currentData:any;
  temp:any
  ngOnInit(): void {
    this.getActiveTopics()

    this.router.events.subscribe((event: Event) => {
      if(event instanceof NavigationStart){
       this.getActiveTopics()
      }
     
  });

  }

  getActiveTopics(){
    this.temp = this.topicservice.getData()
    this.currentData = this.temp.topicList.activeTopic
    console.log(this.currentData)
  }

}
