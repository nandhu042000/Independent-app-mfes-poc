import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router, Event } from '@angular/router';
import { HomeworkServiceService } from '../homework-service.service';

@Component({
  selector: 'app-deactivate-homework',
  templateUrl: './deactivate-homework.component.html',
  styleUrls: ['./deactivate-homework.component.css']
})
export class DeactivateHomeworkComponent implements OnInit {

  constructor(private homweworkService : HomeworkServiceService, private router : Router) { }

  currentData : any;
  temp : any;
  ngOnInit(): void {
    this.getDeactiveHomeworks();

    this.router.events.subscribe((event: Event) => {
      if(event instanceof NavigationStart){
       this.getDeactiveHomeworks()
      }
    });
  }

  getDeactiveHomeworks(){
    this.temp = this.homweworkService.getData()
    this.currentData = this.temp.homeworkList.deactivatedHomework
    console.log(this.currentData);
  }


}
