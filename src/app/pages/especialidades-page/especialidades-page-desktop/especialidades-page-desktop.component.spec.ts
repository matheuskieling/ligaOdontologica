import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecialidadesPageDesktopComponent } from './especialidades-page-desktop.component';

describe('EspecialidadesPageDesktopComponent', () => {
  let component: EspecialidadesPageDesktopComponent;
  let fixture: ComponentFixture<EspecialidadesPageDesktopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EspecialidadesPageDesktopComponent]
    });
    fixture = TestBed.createComponent(EspecialidadesPageDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
