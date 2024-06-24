import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecialidadeCardDesktopComponent } from './especialidade-card-desktop.component';

describe('EspecialidadeCardDesktopComponent', () => {
  let component: EspecialidadeCardDesktopComponent;
  let fixture: ComponentFixture<EspecialidadeCardDesktopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EspecialidadeCardDesktopComponent]
    });
    fixture = TestBed.createComponent(EspecialidadeCardDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
