import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RightcardComponent } from './rightcard.component';

describe('RightcardComponent', () => {
  let component: RightcardComponent;
  let fixture: ComponentFixture<RightcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightcardComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RightcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
