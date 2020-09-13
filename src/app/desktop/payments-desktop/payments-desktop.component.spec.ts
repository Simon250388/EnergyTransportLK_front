import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsDesktopComponent } from './payments-desktop.component';

describe('PaymentsDesktopComponent', () => {
  let component: PaymentsDesktopComponent;
  let fixture: ComponentFixture<PaymentsDesktopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentsDesktopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentsDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
