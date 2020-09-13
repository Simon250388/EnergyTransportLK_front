import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectTpListComponent } from './object-tp-list.component';

describe('ObjectTpListComponent', () => {
  let component: ObjectTpListComponent;
  let fixture: ComponentFixture<ObjectTpListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjectTpListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectTpListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
