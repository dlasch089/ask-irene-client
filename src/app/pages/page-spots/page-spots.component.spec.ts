import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSpotsComponent } from './page-spots.component';

describe('PageSpotsComponent', () => {
  let component: PageSpotsComponent;
  let fixture: ComponentFixture<PageSpotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSpotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSpotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
