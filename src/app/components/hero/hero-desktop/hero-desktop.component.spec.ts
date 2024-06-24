import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDesktopComponent } from './hero-desktop.component';

describe('HeroDesktopComponent', () => {
  let component: HeroDesktopComponent;
  let fixture: ComponentFixture<HeroDesktopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroDesktopComponent]
    });
    fixture = TestBed.createComponent(HeroDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
