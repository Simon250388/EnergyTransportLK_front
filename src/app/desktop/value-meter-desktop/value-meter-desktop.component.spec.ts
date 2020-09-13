import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueMeterDesktopComponent } from './value-meter-desktop.component';

describe('ValueMeterDesktopComponent', () => {
  let component: ValueMeterDesktopComponent;
  let fixture: ComponentFixture<ValueMeterDesktopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValueMeterDesktopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValueMeterDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
