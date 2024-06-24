import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTitleMobileComponent } from './page-title-mobile.component';

describe('PageTitleMobileComponent', () => {
  let component: PageTitleMobileComponent;
  let fixture: ComponentFixture<PageTitleMobileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageTitleMobileComponent]
    });
    fixture = TestBed.createComponent(PageTitleMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
