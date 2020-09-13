import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestTpDetailsComponent } from './request-tp-details.component';

describe('RequestTpDetailsComponent', () => {
  let component: RequestTpDetailsComponent;
  let fixture: ComponentFixture<RequestTpDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestTpDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestTpDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
