import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecialidadeCardComponent } from './especialidade-card.component';

describe('EspecialidadeCardComponent', () => {
  let component: EspecialidadeCardComponent;
  let fixture: ComponentFixture<EspecialidadeCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EspecialidadeCardComponent]
    });
    fixture = TestBed.createComponent(EspecialidadeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
