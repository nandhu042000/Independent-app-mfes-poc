import { Injectable } from '@angular/core';
import { HomeworkServiceData } from './homework.data.model';

@Injectable({
  providedIn: 'root'
})
export class HomeworkServiceService {
  teacher_id:any = localStorage.getItem('teacher_id')
  constructor() { }

  getData(){
    let Cdata;
    HomeworkServiceData.forEach(data=>{
      if(data.teacher_id===this.teacher_id){
        console.log(data)
        data.data.forEach(currentClass=>{
          if(localStorage.getItem('class')===currentClass.class){
            Cdata = currentClass
          }
        })
      }
    })
    return Cdata;
  }
}
