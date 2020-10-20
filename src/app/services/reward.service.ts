import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RewardService {

  reward: any;
  constructor() { 

    this.reward = new BehaviorSubject(this.reward);
  }

  
}
