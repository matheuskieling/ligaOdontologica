import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipeMobileComponent } from './equipe-mobile.component';

describe('EquipeMobileComponent', () => {
  let component: EquipeMobileComponent;
  let fixture: ComponentFixture<EquipeMobileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EquipeMobileComponent]
    });
    fixture = TestBed.createComponent(EquipeMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
