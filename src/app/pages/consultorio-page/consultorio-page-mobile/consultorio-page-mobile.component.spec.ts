import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultorioPageMobileComponent } from './consultorio-page-mobile.component';

describe('ConsultorioPageMobileComponent', () => {
  let component: ConsultorioPageMobileComponent;
  let fixture: ComponentFixture<ConsultorioPageMobileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultorioPageMobileComponent]
    });
    fixture = TestBed.createComponent(ConsultorioPageMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
