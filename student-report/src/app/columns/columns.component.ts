import { Component, OnInit } from '@angular/core';
import { column } from './column-det';
import {Column} from "./column-modesl"

@Component({
  selector: 'app-columns',
  templateUrl: './columns.component.html',
  styleUrls: ['./columns.component.css']
})
export class ColumnsComponent implements OnInit {
  columnDetails:Array<Column> = column
  constructor() { }

  ngOnInit(): void {
  console.log(this.columnDetails)

  }

}
