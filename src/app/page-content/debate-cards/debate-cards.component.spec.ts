import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebateCardsComponent } from './debate-cards.component';

describe('DebateCardsComponent', () => {
  let component: DebateCardsComponent;
  let fixture: ComponentFixture<DebateCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebateCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebateCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
