import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RightslideComponent } from './rightslide.component';

describe('RightslideComponent', () => {
  let component: RightslideComponent;
  let fixture: ComponentFixture<RightslideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightslideComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RightslideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
