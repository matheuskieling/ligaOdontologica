import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsAppFloatingButtonDesktopComponent } from './whats-app-floating-button-desktop.component';

describe('WhatsAppFloatingButtonDesktopComponent', () => {
  let component: WhatsAppFloatingButtonDesktopComponent;
  let fixture: ComponentFixture<WhatsAppFloatingButtonDesktopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhatsAppFloatingButtonDesktopComponent]
    });
    fixture = TestBed.createComponent(WhatsAppFloatingButtonDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
