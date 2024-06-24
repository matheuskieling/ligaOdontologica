import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DentistaProfileMobileComponent } from './dentista-profile-mobile.component';

describe('DentistaProfileMobileComponent', () => {
  let component: DentistaProfileMobileComponent;
  let fixture: ComponentFixture<DentistaProfileMobileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DentistaProfileMobileComponent]
    });
    fixture = TestBed.createComponent(DentistaProfileMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
