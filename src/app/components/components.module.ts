import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftcardComponent } from './leftcard/leftcard.component';


const CUSTOM = [
  LeftcardComponent
]



@NgModule({
  declarations: CUSTOM,
  exports:CUSTOM,
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
