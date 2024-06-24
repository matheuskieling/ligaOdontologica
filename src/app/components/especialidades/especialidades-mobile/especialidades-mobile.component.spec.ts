import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecialidadesMobileComponent } from './especialidades-mobile.component';

describe('EspecialidadesMobileComponent', () => {
  let component: EspecialidadesMobileComponent;
  let fixture: ComponentFixture<EspecialidadesMobileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EspecialidadesMobileComponent]
    });
    fixture = TestBed.createComponent(EspecialidadesMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
