import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddShoeModalComponent } from './add-shoe-modal.component';

describe('AddShoeModalComponent', () => {
  let component: AddShoeModalComponent;
  let fixture: ComponentFixture<AddShoeModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddShoeModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddShoeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
