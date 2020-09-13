import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectTpDetailsComponent } from './object-tp-details.component';

describe('ObjectTpDetailsComponent', () => {
  let component: ObjectTpDetailsComponent;
  let fixture: ComponentFixture<ObjectTpDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjectTpDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectTpDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
