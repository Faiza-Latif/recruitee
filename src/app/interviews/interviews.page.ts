import {Component, OnInit} from '@angular/core';
import {Interview} from './interview.model';
import {InterviewsService} from './interviews.service';
import { NewInterviewPage } from '../new-interview/new-interview.page';
import { ModalController } from '@ionic/angular';

@Component({
    selector: 'app-interviews',
    templateUrl: './interviews.page.html',
    styleUrls: ['./interviews.page.scss'],
})
export class InterviewsPage implements OnInit {
    interviews: Interview[];

    constructor(private interviewsService: InterviewsService,  public modalController: ModalController) {
    }

    ngOnInit() {
        this.interviews = this.interviewsService.getAllCurrentInterviews();
    } 
      async createNewInterview() {
        const modal = await this.modalController.create({
          component: NewInterviewPage
        });
        return await modal.present();
      }

    openRelatedInterviews() {

    }

}
