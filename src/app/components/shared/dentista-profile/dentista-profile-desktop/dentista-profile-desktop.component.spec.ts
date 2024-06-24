import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DentistaProfileDesktopComponent } from './dentista-profile-desktop.component';

describe('DentistaProfileDesktopComponent', () => {
  let component: DentistaProfileDesktopComponent;
  let fixture: ComponentFixture<DentistaProfileDesktopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DentistaProfileDesktopComponent]
    });
    fixture = TestBed.createComponent(DentistaProfileDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
