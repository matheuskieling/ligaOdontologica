import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTitleDesktopComponent } from './page-title-desktop.component';

describe('PageTitleDesktopComponent', () => {
  let component: PageTitleDesktopComponent;
  let fixture: ComponentFixture<PageTitleDesktopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageTitleDesktopComponent]
    });
    fixture = TestBed.createComponent(PageTitleDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
