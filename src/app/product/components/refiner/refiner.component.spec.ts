import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefinerComponent } from './refiner.component';

describe('RefinerComponent', () => {
  let component: RefinerComponent;
  let fixture: ComponentFixture<RefinerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefinerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefinerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
