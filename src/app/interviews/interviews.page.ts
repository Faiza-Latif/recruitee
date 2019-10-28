import { Component, OnInit } from '@angular/core';
import { Interview } from './interview.model';
import { InterviewsService } from './interviews.service';

@Component({
  selector: 'app-interviews',
  templateUrl: './interviews.page.html',
  styleUrls: ['./interviews.page.scss'],
})
export class InterviewsPage implements OnInit {
  interviews: Interview[];
  constructor(private interviewsService: InterviewsService) { }

  ngOnInit() {
    this.interviews = this.interviewsService.getAllInterviews();
  }

}
