import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultorioDesktopComponent } from './consultorio-desktop.component';

describe('ConsultorioDesktopComponent', () => {
  let component: ConsultorioDesktopComponent;
  let fixture: ComponentFixture<ConsultorioDesktopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultorioDesktopComponent]
    });
    fixture = TestBed.createComponent(ConsultorioDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
