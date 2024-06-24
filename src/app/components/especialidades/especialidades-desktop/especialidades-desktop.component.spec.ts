import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecialidadesDesktopComponent } from './especialidades-desktop.component';

describe('EspecialidadesDesktopComponent', () => {
  let component: EspecialidadesDesktopComponent;
  let fixture: ComponentFixture<EspecialidadesDesktopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EspecialidadesDesktopComponent]
    });
    fixture = TestBed.createComponent(EspecialidadesDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
