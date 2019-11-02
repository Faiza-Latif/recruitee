import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-new-interview',
  templateUrl: './new-interview.page.html',
  styleUrls: ['./new-interview.page.scss'],
})
export class NewInterviewPage implements OnInit {
  form : any;
  now : any;
  constructor(
    private modalController: ModalController,
    private navParams: NavParams
  ) { 
    this.form = {
      companyName: "",
      jobDescription: ""
    }
  }
 
  ngOnInit() {
    this.now = Date.now().toString;
  }
 
  async closeModal() {
    console.log(this.form);
    await this.modalController.dismiss(this.form);
  }

}
