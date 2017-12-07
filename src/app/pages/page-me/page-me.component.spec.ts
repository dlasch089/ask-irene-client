import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMeComponent } from './page-me.component';

describe('PageMeComponent', () => {
  let component: PageMeComponent;
  let fixture: ComponentFixture<PageMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
