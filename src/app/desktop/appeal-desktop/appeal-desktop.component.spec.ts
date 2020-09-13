import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppealDesktopComponent } from './appeal-desktop.component';

describe('AppealDesktopComponent', () => {
  let component: AppealDesktopComponent;
  let fixture: ComponentFixture<AppealDesktopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppealDesktopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppealDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
