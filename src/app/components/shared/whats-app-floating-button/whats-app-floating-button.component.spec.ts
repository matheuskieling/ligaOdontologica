import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsAppFloatingButtonComponent } from './whats-app-floating-button.component';

describe('WhatsAppFloatingButtonComponent', () => {
  let component: WhatsAppFloatingButtonComponent;
  let fixture: ComponentFixture<WhatsAppFloatingButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhatsAppFloatingButtonComponent]
    });
    fixture = TestBed.createComponent(WhatsAppFloatingButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
