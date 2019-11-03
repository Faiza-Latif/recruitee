import { Component, OnInit, ModuleWithComponentFactories } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import * as moment from 'moment';
import { InterviewsService } from '../interviews/interviews.service';

@Component({
  selector: 'app-new-interview',
  templateUrl: './new-interview.page.html',
  styleUrls: ['./new-interview.page.scss'],
})
export class NewInterviewPage implements OnInit {
  form: any;
  currentYear: string;
  currentTime: string;
  currentDate: string;
  constructor(
    private modalController: ModalController,
    private interviewsService: InterviewsService,
    private navParams: NavParams
  ) { 
   
  }
 
  ngOnInit() {
    this.currentYear = moment().get('year').toString();
    this.currentDate = moment().format('D-MMM-YYYY');
    this.currentTime = moment().format('HH:mm');

    this.form = {
      companyName: "",
      date: this.currentDate,
      time: this.currentTime,
      dateTime: moment().toDate(),
      location: "",
      alarm: false,
      calendar: false,
      status: ""
    }
    }
 
  async closeModal() {
    this.interviewsService.addInterview(this.form);
    console.log(this.interviewsService.getAllCurrentInterviews());
    await this.modalController.dismiss(this.form);
  }

}
