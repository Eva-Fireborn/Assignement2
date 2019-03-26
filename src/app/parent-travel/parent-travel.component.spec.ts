import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentTravelComponent } from './parent-travel.component';

describe('ParentTravelComponent', () => {
  let component: ParentTravelComponent;
  let fixture: ComponentFixture<ParentTravelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentTravelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentTravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
