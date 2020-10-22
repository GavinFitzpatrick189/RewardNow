import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent{
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home',
      url: '/tabs',
      icon: 'home'
    },
    {
      title: 'Inbox',
      url: '/inbox',
      icon: 'mail'
    }
  ];
  constructor() {
    this.initializeApp();
  }

  initializeApp() {
  }

  ngOnInit() {
    const path = window.location.pathname.split('/')[1];
    console.log(path)
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
