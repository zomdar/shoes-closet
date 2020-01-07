import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoesPageContainerComponent } from './shoes-page-container.component';

describe('ShoesPageContainerComponent', () => {
  let component: ShoesPageContainerComponent;
  let fixture: ComponentFixture<ShoesPageContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoesPageContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoesPageContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
