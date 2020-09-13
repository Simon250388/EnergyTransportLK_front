import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestTpAddComponent } from './request-tp-add.component';

describe('RequestTpAddComponent', () => {
  let component: RequestTpAddComponent;
  let fixture: ComponentFixture<RequestTpAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestTpAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestTpAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
