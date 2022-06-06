import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router,Event } from '@angular/router';
import { TopicServiceService } from '../topic-service.service';

@Component({
  selector: 'app-deactived-topic',
  templateUrl: './deactived-topic.component.html',
  styleUrls: ['./deactived-topic.component.css']
})
export class DeactivedTopicComponent implements OnInit {

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
    this.currentData = this.temp.topicList.deactivatedTopics
    console.log(this.currentData)
  }

}
