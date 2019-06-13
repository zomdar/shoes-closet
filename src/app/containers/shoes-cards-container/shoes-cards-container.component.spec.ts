import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoesCardsContainerComponent } from './shoes-cards-container.component';

describe('ShoesCardsContainerComponent', () => {
  let component: ShoesCardsContainerComponent;
  let fixture: ComponentFixture<ShoesCardsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoesCardsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoesCardsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
