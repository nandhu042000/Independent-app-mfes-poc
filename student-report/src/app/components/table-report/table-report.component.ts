import { Component, OnInit } from '@angular/core';
import { FetchReportServiceService } from 'src/app/services/fetch-report-service.service';

@Component({
  selector: 'app-table-report',
  templateUrl: './table-report.component.html',
  styleUrls: ['./table-report.component.css']
})
export class TableReportComponent implements OnInit {
  data: any;
  constructor(public service: FetchReportServiceService) {  }

  ngOnInit(): void {
    this.data=this.service.getDetails();
  }

}
