import { Component } from '@angular/core';
import { RewardService } from '../services/reward.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  updatedReward:any;


  constructor(private rewardService: RewardService) {

    // this.rewardService.reward.subscribe(onNext: data =>{
    //   this.updatedReward = data;
    // });

     
  }


  onNext(){
    this.rewardService.reward.next(true);
  }

}


