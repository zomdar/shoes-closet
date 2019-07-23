import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddShoeFormComponent } from './add-shoe-form.component';

describe('AddShoeFormComponent', () => {
  let component: AddShoeFormComponent;
  let fixture: ComponentFixture<AddShoeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddShoeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddShoeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
