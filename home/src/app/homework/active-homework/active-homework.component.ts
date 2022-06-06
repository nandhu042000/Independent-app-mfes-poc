import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router, Event } from '@angular/router';
import { HomeworkServiceService } from '../homework-service.service';
import { HomeworkServiceData } from '../homework.data.model';

@Component({
  selector: 'app-active-homework',
  templateUrl: './active-homework.component.html',
  styleUrls: ['./active-homework.component.css']
})
export class ActiveHomeworkComponent implements OnInit {

  constructor(private homweworkService : HomeworkServiceService, private router : Router) { }

  currentData : any;
  temp : any;
  ngOnInit(): void {
    this.getActiveHomeworks()

    this.router.events.subscribe((event: Event) => {
      if(event instanceof NavigationStart){
       this.getActiveHomeworks()
      }
    });
  }

  getActiveHomeworks(){
    this.temp = this.homweworkService.getData()
    this.currentData = this.temp.homeworkList.activeHomework
    console.log(this.currentData);
  }

}
