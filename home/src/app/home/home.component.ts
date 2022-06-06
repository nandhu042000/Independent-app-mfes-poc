import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router,Event } from '@angular/router';
import { TopicServiceService } from '../topic/topic-service.service';

@Component({
  selector: 'app-topic',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'home';
  temp:any 
  currentData:any
  user = {
      firstName:"",
      lastName:""
  }

  constructor(private topicservice: TopicServiceService,private router: Router) {}
  ngOnInit(): void {
      localStorage.getItem('teacher_id') === "1234" ? this.user = {...this.user,firstName:"Nandhu",lastName:"Teacher"} : this.user = {...this.user,firstName:"bhuvanesh",lastName:"Teacher"}
      console.log(this.topicservice.getData())
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
