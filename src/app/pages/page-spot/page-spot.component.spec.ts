import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSpotComponent } from './page-spot.component';

describe('PageSpotComponent', () => {
  let component: PageSpotComponent;
  let fixture: ComponentFixture<PageSpotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSpotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSpotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
