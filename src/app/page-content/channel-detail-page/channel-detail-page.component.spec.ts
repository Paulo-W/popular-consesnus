import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelDetailPageComponent } from './channel-detail-page.component';

describe('ChannelDetailPageComponent', () => {
  let component: ChannelDetailPageComponent;
  let fixture: ComponentFixture<ChannelDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
