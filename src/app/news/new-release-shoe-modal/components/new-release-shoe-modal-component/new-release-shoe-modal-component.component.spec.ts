import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewReleaseShoeModalComponent } from './new-release-shoe-modal-component.component';

describe('NewReleaseShoeModalComponent', () => {
  let component: NewReleaseShoeModalComponent;
  let fixture: ComponentFixture<NewReleaseShoeModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewReleaseShoeModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewReleaseShoeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
