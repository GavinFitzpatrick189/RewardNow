import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RewardService {

  rewardArray:any;
  constructor() { 

    this.rewardArray = new BehaviorSubject(this.rewardArray);
  }

  
}
