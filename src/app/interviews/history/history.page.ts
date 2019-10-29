import { Component, OnInit } from '@angular/core';
import { Interview } from '../interview.model';
import { ActivatedRoute } from '@angular/router';
import { InterviewsService } from '../interviews.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  interviews: Interview[];
  constructor(private activatedRoute: ActivatedRoute, private interviewsService: InterviewsService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const companyName = paramMap.get('companyName');
      this.interviews = this.interviewsService.getInterviewsFromCompany(companyName);
    });
  }

}
