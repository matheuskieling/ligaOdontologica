import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultorioPageDesktopComponent } from './consultorio-page-desktop.component';

describe('ConsultorioPageDesktopComponent', () => {
  let component: ConsultorioPageDesktopComponent;
  let fixture: ComponentFixture<ConsultorioPageDesktopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultorioPageDesktopComponent]
    });
    fixture = TestBed.createComponent(ConsultorioPageDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
