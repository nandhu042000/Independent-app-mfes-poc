import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, Event } from '@angular/router';
import { WorksheetServiceService } from '../worksheet-service.service';

@Component({
  selector: 'app-deactive-worksheet',
  templateUrl: './deactive-worksheet.component.html',
  styleUrls: ['./deactive-worksheet.component.css']
})
export class DeactiveWorksheetComponent implements OnInit {

  constructor(private worksheetService:WorksheetServiceService,private router:Router) { }
  currentData:any;
  temp:any
  ngOnInit(): void {
    this.getDeactiveWorksheets()

    this.router.events.subscribe((event: Event) => {
      if(event instanceof NavigationStart){
       this.getDeactiveWorksheets()
      }
  });
  }

  getDeactiveWorksheets(){
    this.temp = this.worksheetService.getData()
    this.currentData = this.temp.worksheetList.deactivatedWorksheet
    console.log(this.currentData)
  }


}
