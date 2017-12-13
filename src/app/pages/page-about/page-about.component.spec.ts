import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAboutComponent } from './page-about.component';

describe('PageAboutComponent', () => {
  let component: PageAboutComponent;
  let fixture: ComponentFixture<PageAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
