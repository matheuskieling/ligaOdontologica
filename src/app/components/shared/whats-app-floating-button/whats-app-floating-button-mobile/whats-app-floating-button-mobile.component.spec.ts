import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsAppFloatingButtonMobileComponent } from './whats-app-floating-button-mobile.component';

describe('WhatsAppFloatingButtonMobileComponent', () => {
  let component: WhatsAppFloatingButtonMobileComponent;
  let fixture: ComponentFixture<WhatsAppFloatingButtonMobileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhatsAppFloatingButtonMobileComponent]
    });
    fixture = TestBed.createComponent(WhatsAppFloatingButtonMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
