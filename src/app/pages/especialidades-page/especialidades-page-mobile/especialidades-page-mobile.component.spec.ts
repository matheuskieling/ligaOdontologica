import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecialidadesPageMobileComponent } from './especialidades-page-mobile.component';

describe('EspecialidadesPageMobileComponent', () => {
  let component: EspecialidadesPageMobileComponent;
  let fixture: ComponentFixture<EspecialidadesPageMobileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EspecialidadesPageMobileComponent]
    });
    fixture = TestBed.createComponent(EspecialidadesPageMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
