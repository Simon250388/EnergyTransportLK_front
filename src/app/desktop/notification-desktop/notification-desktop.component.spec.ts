import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationDesktopComponent } from './notification-desktop.component';

describe('NotificationDesktopComponent', () => {
  let component: NotificationDesktopComponent;
  let fixture: ComponentFixture<NotificationDesktopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationDesktopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
