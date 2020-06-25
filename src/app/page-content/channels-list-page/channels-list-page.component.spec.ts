import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelsListPageComponent } from './channels-list-page.component';

describe('ChannelsListPageComponent', () => {
  let component: ChannelsListPageComponent;
  let fixture: ComponentFixture<ChannelsListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelsListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelsListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
