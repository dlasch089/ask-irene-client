import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListAllComponent } from './page-list-all.component';

describe('PageListAllComponent', () => {
  let component: PageListAllComponent;
  let fixture: ComponentFixture<PageListAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageListAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageListAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
