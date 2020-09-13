import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppealAddComponent } from './appeal-add.component';

describe('AppealAddComponent', () => {
  let component: AppealAddComponent;
  let fixture: ComponentFixture<AppealAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppealAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppealAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
