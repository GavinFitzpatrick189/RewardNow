import { Component, OnInit } from '@angular/core';
import { RewardService } from 'src/app/services/reward.service';

@Component({
  selector: 'app-rightslide',
  templateUrl: './rightslide.component.html',
  styleUrls: ['./rightslide.component.scss'],
})
export class RightslideComponent implements OnInit {

  rewardArray:string[];

  constructor(private rewardService: RewardService) {

    this.rewardService.rewardArray.subscribe(data =>{
      this.rewardArray = data;
    });
  }

  ngOnInit() {}

}
