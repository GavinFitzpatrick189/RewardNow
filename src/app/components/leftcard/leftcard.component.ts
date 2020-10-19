import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-leftcard',
  templateUrl: './leftcard.component.html',
  styleUrls: ['./leftcard.component.scss'],
})
export class LeftcardComponent implements OnInit {

  @Input('imageSource') imageSource: string;
  @Input('title') title: string;
  @Input('subtitle') subtitle: string;
  @Input('content') content: string;


  constructor() { 

  }

  ngOnInit() {
  }

}
