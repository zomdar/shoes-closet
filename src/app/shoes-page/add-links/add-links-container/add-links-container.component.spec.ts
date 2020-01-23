import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLinksContainerComponent } from './add-links-container.component';

describe('AddLinksContainerComponent', () => {
  let component: AddLinksContainerComponent;
  let fixture: ComponentFixture<AddLinksContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLinksContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLinksContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
