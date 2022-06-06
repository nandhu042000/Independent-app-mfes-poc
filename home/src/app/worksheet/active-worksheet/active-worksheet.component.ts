import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router, Event } from '@angular/router';
import { WorksheetServiceService } from '../worksheet-service.service';

@Component({
  selector: 'app-active-worksheet',
  templateUrl: './active-worksheet.component.html',
  styleUrls: ['./active-worksheet.component.css']
})
export class ActiveWorksheetComponent implements OnInit {

  constructor(private worksheetService:WorksheetServiceService,private router:Router) { }
  currentData:any;
  temp:any
  ngOnInit(): void {
    this.getActiveWorksheets()

    this.router.events.subscribe((event: Event) => {
      if(event instanceof NavigationStart){
       this.getActiveWorksheets()
      }
  });
  }

  getActiveWorksheets(){
    this.temp = this.worksheetService.getData()
    this.currentData = this.temp.worksheetList.activeWorksheet
    console.log(this.currentData)
  }


}
