import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroMobileComponent } from './hero-mobile.component';

describe('HeroMobileComponent', () => {
  let component: HeroMobileComponent;
  let fixture: ComponentFixture<HeroMobileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroMobileComponent]
    });
    fixture = TestBed.createComponent(HeroMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
