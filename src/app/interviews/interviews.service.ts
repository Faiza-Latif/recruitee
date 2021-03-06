import {Injectable} from '@angular/core';
import {Interview} from './interview.model';

@Injectable({
    providedIn: 'root'
})
export class InterviewsService {
    private interviews: Interview[] = [
        {
            companyName: 'Agap2',
            status: 'firstInterview',
            date: '2019-12-15',
            time: '13:47',
            dateTime: new Date('2019-12-15 13:47'),
            alarm: false,
            calendar: false,
            location: 'picoas'
        },
        {
            companyName: 'Green',
            status: 'firstInterview',
            date: '2019-10-18',
            time: '13:47',
            dateTime: new Date('2019-10-18 13:47'),
            alarm: false,
            calendar: false,
            location: 'odivelas'
        },
        {
            companyName: 'Green',
            status: 'secondInterview',
            date: '2019-12-26',
            time: '19:47',
            dateTime: new Date('2019-12-26 19:47'),
            alarm: false,
            calendar: false,
            location: 'odivelas'
        }
    ];


    constructor() {
    }

    addInterview(interview: Interview) {
        this.interviews.push(interview);
    }

    getAllInterviews() {
        return [...this.interviews];
    }

    getAllCurrentInterviews() {
        //TO DO: TURN THIS INTO OBSERVABLE
        return [...this.interviews.filter( interview => {
          return interview.dateTime.toISOString() > new Date().toISOString();
      })];
    }

    /**
     * Returns all the interviews related to a specific company
     * @param companyName
     */
    getInterviewsFromCompany(companyName: string) {
        return [...this.interviews.filter(interview => interview.companyName === companyName)];
    }
}
