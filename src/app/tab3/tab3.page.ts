import { Component, ViewChild, ElementRef } from '@angular/core';
import { ToastController, LoadingController, Platform } from '@ionic/angular';
import jsQR from 'jsqr';

import { Plugins } from '@capacitor/core';
import { RewardService } from '../services/reward.service';
const { Share } = Plugins;

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  @ViewChild('video', { static: false }) video: ElementRef;
  @ViewChild('canvas', { static: false }) canvas: ElementRef;
  @ViewChild('fileinput', { static: false }) fileinput: ElementRef;

  canvasElement: any;
  videoElement: any;
  canvasContext: any;

  scanActive = false;
  scanResult: string;
  loading: HTMLIonLoadingElement = null;
  rewardArray = ['Free Coffee'];


  constructor(
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private rewardService: RewardService
  ) {

    this.rewardService.rewardArray.next(this.rewardArray);

  }

  async addToRewards() {
    var str = this.scanResult;
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


  async shareReward(link) {
    await Share.share({
      title: 'New Reward',
      text: 'You have a new reward',
      url: link,
      dialogTitle: 'Share with buddies'
    });
  }


  async startScan() {
    // Not working on iOS standalone mode!
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: 'environment' }
    });

    this.videoElement.srcObject = stream;
    // Required for Safari
    this.videoElement.setAttribute('playsinline', true);

    this.loading = await this.loadingCtrl.create({});
    await this.loading.present();

    this.videoElement.play();
    requestAnimationFrame(this.scan.bind(this));
  }

  async scan() {
    if (this.videoElement.readyState === this.videoElement.HAVE_ENOUGH_DATA) {
      if (this.loading) {
        await this.loading.dismiss();
        this.loading = null;
        this.scanActive = true;
      }

      this.canvasElement.height = this.videoElement.videoHeight;
      this.canvasElement.width = this.videoElement.videoWidth;

      this.canvasContext.drawImage(
        this.videoElement,
        0,
        0,
        this.canvasElement.width,
        this.canvasElement.height
      );
      const imageData = this.canvasContext.getImageData(
        0,
        0,
        this.canvasElement.width,
        this.canvasElement.height
      );
      const code = jsQR(imageData.data, imageData.width, imageData.height, {
        inversionAttempts: 'dontInvert'
      });

      if (code) {
        this.scanActive = false;
        this.scanResult = code.data;
        this.showQrToast();
      } else {
        if (this.scanActive) {
          requestAnimationFrame(this.scan.bind(this));
        }
      }
    } else {
      requestAnimationFrame(this.scan.bind(this));
    }
  }

  ngAfterViewInit() {
    this.canvasElement = this.canvas.nativeElement;
    this.canvasContext = this.canvasElement.getContext('2d');
    this.videoElement = this.video.nativeElement;
  }

  slideOpts = {
    initialSlide: 1
  };


  async showQrToast() {
    const toast = await this.toastCtrl.create({
      message: `${this.scanResult}`,
      position: 'bottom',
      buttons: [
        {
          text: 'Claim',
          handler: () => {
            window.open(this.scanResult, '_system', 'location=yes');
            this.addToRewards();
          }
        },
        {
          text: 'Cancel',
          role: 'Cancel'
        }
      ]
    });
    toast.present();
  }

  reset() {
    this.scanResult = null;
  }

  stopScan() {
    this.scanActive = false;
  }

  captureImage() {
    this.fileinput.nativeElement.click();
  }

  handleFile(files: FileList) {
    const file = files.item(0);

    var img = new Image();
    img.onload = () => {
      this.canvasContext.drawImage(img, 0, 0, this.canvasElement.width, this.canvasElement.height);
      const imageData = this.canvasContext.getImageData(
        0,
        0,
        this.canvasElement.width,
        this.canvasElement.height
      );
      const code = jsQR(imageData.data, imageData.width, imageData.height, {
        inversionAttempts: 'dontInvert'
      });

      if (code) {
        this.scanResult = code.data;
        this.showQrToast();
      }
    };
    img.src = URL.createObjectURL(file);
  }
}
