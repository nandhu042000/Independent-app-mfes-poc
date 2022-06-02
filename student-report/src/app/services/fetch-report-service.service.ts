import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchReportServiceService {
  constructor() { }
  getDetails(){
    return[
      {
        name: "Neji",
        avgUsage : 10,
        questionsAttempted:5,
        accuracy: 10
      },
      {
        name: "Hyuga",
        avgUsage : 100,
        questionsAttempted:5,
        accuracy: 10
      },{
        name: "Luffy",
        avgUsage : 70,
        questionsAttempted:5,
        accuracy: 10
      },{
        name: "Killua",
        avgUsage : 30,
        questionsAttempted:5,
        accuracy: 10
      },{
        name: "Kuroko",
        avgUsage : 80,
        questionsAttempted:5,
        accuracy: 10
      },{
        name: "Midorima Shintaro",
        avgUsage : 120,
        questionsAttempted:5,
        accuracy: 10
      },{
        name: "Akashi Seijuro",
        avgUsage : 110,
        questionsAttempted:5,
        accuracy: 10
      },
      {
        name: "Uchiha Itachi",
        avgUsage : 10,
        questionsAttempted:5,
        accuracy: 10
      },
      {
        name: "Hiruzen",
        avgUsage : 100,
        questionsAttempted:5,
        accuracy: 10
      },{
        name: "Haizaki",
        avgUsage : 70,
        questionsAttempted:5,
        accuracy: 10
      },{
        name: "Kagami Taiga",
        avgUsage : 30,
        questionsAttempted:5,
        accuracy: 10
      },{
        name: "Kise Ryota",
        avgUsage : 80,
        questionsAttempted:5,
        accuracy: 10
      },{
        name: "Aomine Daiki",
        avgUsage : 120,
        questionsAttempted:5,
        accuracy: 10
      },{
        name: "Murasakibara Atsushi",
        avgUsage : 110,
        questionsAttempted:5,
        accuracy: 10
      },
      {
        name: "Uchiha Madara",
        avgUsage : 10,
        questionsAttempted:5,
        accuracy: 10
      }
    ]
  }
}
