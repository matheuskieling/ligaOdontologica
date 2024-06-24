import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactPageMobileComponent } from './contact-page-mobile.component';

describe('ContactPageMobileComponent', () => {
  let component: ContactPageMobileComponent;
  let fixture: ComponentFixture<ContactPageMobileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactPageMobileComponent]
    });
    fixture = TestBed.createComponent(ContactPageMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
