import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteShoeModalComponent } from './delete-shoe-modal.component';

describe('DeleteShoeModalComponent', () => {
  let component: DeleteShoeModalComponent;
  let fixture: ComponentFixture<DeleteShoeModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteShoeModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteShoeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
