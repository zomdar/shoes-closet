import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddShoeContainerComponent } from './add-shoe-container.component';

describe('AddShoeContainerComponent', () => {
  let component: AddShoeContainerComponent;
  let fixture: ComponentFixture<AddShoeContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddShoeContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddShoeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
