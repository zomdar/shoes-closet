import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewReleaseShoeModalContainerComponent } from './new-release-shoe-modal-container.component';

describe('NewReleaseShoeModalContainerComponent', () => {
  let component: NewReleaseShoeModalContainerComponent;
  let fixture: ComponentFixture<NewReleaseShoeModalContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewReleaseShoeModalContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewReleaseShoeModalContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
