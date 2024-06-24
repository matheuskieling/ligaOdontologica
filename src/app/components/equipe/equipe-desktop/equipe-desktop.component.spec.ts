import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipeDesktopComponent } from './equipe-desktop.component';

describe('EquipeDesktopComponent', () => {
  let component: EquipeDesktopComponent;
  let fixture: ComponentFixture<EquipeDesktopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EquipeDesktopComponent]
    });
    fixture = TestBed.createComponent(EquipeDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
