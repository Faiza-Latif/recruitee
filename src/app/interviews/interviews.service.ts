import { Injectable } from '@angular/core';
import { Interview } from './interview.model';

@Injectable({
  providedIn: 'root'
})
export class InterviewsService {
  private interviews: Interview[] = [
    {
      companyName: 'Agap2',
      jobDescription: 'Programmer',
      status: 'firstInterview',
      date: '2019-12-15',
      time: '13:47',
      alarm: false,
      calendar: false,
    },
    {
      companyName: 'Green',
      jobDescription: 'Programmer',
      status: 'firstInterview',
      date: '2019-10-18',
      time: '13:47',
      alarm: false,
      calendar: false,
    },
    {
      companyName: 'Green',
      jobDescription: 'Programmer',
      status: 'secondInterview',
      date: '2019-12-26',
      time: '19:47',
      alarm: false,
      calendar: false,
    }
  ];

 
  constructor() { }

  getAllInterviews() {
    return [...this.interviews];
  }

  getAllCurrentInterviews() {
    //return interviews where date+time >= right now
  }

  getInterviews(companyName: string) {
    return [...this.interviews.filter(interview => interview.companyName === companyName)];
  }
}
