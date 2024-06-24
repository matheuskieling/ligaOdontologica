import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultorioMobileComponent } from './consultorio-mobile.component';

describe('ConsultorioMobileComponent', () => {
  let component: ConsultorioMobileComponent;
  let fixture: ComponentFixture<ConsultorioMobileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultorioMobileComponent]
    });
    fixture = TestBed.createComponent(ConsultorioMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
