import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestTpDesktopListComponent } from './request-tp-desktop-list.component';

describe('RequestTpDesktopListComponent', () => {
  let component: RequestTpDesktopListComponent;
  let fixture: ComponentFixture<RequestTpDesktopListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestTpDesktopListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestTpDesktopListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
