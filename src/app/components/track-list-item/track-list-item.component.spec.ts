import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackListItemComponent } from './track-list-item.component';

describe('TrackListItemComponent', () => {
  let component: TrackListItemComponent;
  let fixture: ComponentFixture<TrackListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
