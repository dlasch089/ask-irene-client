import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapAutoCompleteComponent } from './map-auto-complete.component';

describe('MapAutoCompleteComponent', () => {
  let component: MapAutoCompleteComponent;
  let fixture: ComponentFixture<MapAutoCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapAutoCompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapAutoCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
