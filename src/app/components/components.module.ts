import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftcardComponent } from './leftcard/leftcard.component';
import { RightcardComponent } from './rightcard/rightcard.component';
import { RightslideComponent } from './rightslide/rightslide.component';


const CUSTOM = [
  LeftcardComponent,
  RightcardComponent,
  RightslideComponent
]



@NgModule({
  declarations: CUSTOM,
  exports:CUSTOM,
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
