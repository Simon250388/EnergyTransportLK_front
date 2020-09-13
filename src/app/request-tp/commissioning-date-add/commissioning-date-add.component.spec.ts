import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommissioningDateAddComponent } from './commissioning-date-add.component';

describe('CommissioningDateAddComponent', () => {
  let component: CommissioningDateAddComponent;
  let fixture: ComponentFixture<CommissioningDateAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommissioningDateAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommissioningDateAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
