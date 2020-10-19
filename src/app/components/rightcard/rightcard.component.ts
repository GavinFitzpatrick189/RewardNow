import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rightcard',
  templateUrl: './rightcard.component.html',
  styleUrls: ['./rightcard.component.scss'],
})
export class RightcardComponent implements OnInit {

  @Input('imageSource') imageSource: string;
  @Input('title') title: string;

  constructor() { }

  ngOnInit() {}

}
