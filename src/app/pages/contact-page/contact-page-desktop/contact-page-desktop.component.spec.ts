import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactPageDesktopComponent } from './contact-page-desktop.component';

describe('ContactPageDesktopComponent', () => {
  let component: ContactPageDesktopComponent;
  let fixture: ComponentFixture<ContactPageDesktopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactPageDesktopComponent]
    });
    fixture = TestBed.createComponent(ContactPageDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
