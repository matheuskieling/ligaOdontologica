import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultorioComponent } from './consultorio.component';

describe('ConsultorioComponent', () => {
  let component: ConsultorioComponent;
  let fixture: ComponentFixture<ConsultorioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultorioComponent]
    });
    fixture = TestBed.createComponent(ConsultorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
