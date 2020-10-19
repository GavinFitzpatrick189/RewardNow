import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LeftcardComponent } from './leftcard.component';

describe('LeftcardComponent', () => {
  let component: LeftcardComponent;
  let fixture: ComponentFixture<LeftcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftcardComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LeftcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
