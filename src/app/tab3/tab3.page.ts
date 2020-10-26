import { RewardService } from '../services/reward.service';

import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  data: any;
  rewardArray: string[];

  constructor(private barcodeScanner: BarcodeScanner,
    private rewardService: RewardService) {

    this.rewardService.rewardArray.next(this.rewardArray);


    this.hitThis();

  }

  async hitThis(){
    console.log("Hit this");
  }

  async scan() {
    this.data = null;
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.data = barcodeData;
    }).catch(err => {
      console.log('Error', err);
    });
  }

  async addToRewards() {
    var str = this.data;
    var indices = [];
    for (var i = 0; i < str.length; i++) {
      if (str[i] === ".") indices.push(i);
    }
    indices[0]++;

    var newStr = str.substring(indices[0], indices[1]);
    newStr = newStr.charAt(0).toUpperCase() + newStr.slice(1);

    this.rewardArray.push(newStr);
    this.rewardService.rewardArray.next(this.rewardArray);

  }

}