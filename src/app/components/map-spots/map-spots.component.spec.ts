import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapSpotsComponent } from './map-spots.component';

describe('MapSpotsComponent', () => {
  let component: MapSpotsComponent;
  let fixture: ComponentFixture<MapSpotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapSpotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapSpotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
