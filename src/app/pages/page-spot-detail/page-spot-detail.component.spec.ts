import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSpotDetailComponent } from './page-spot-detail.component';

describe('PageSpotDetailComponent', () => {
  let component: PageSpotDetailComponent;
  let fixture: ComponentFixture<PageSpotDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSpotDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSpotDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
