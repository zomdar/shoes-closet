import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoesCardsComponentComponent } from './shoes-cards-component.component';

describe('ShoesCardsComponentComponent', () => {
  let component: ShoesCardsComponentComponent;
  let fixture: ComponentFixture<ShoesCardsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoesCardsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoesCardsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
