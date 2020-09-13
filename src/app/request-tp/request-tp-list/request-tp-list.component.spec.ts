import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestTPListComponent } from './request-tp-list.component';

describe('RequestTPListComponent', () => {
  let component: RequestTPListComponent;
  let fixture: ComponentFixture<RequestTPListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestTPListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestTPListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
