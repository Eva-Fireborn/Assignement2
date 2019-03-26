import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildTravelComponent } from './child-travel.component';

describe('ChildTravelComponent', () => {
  let component: ChildTravelComponent;
  let fixture: ComponentFixture<ChildTravelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildTravelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildTravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
