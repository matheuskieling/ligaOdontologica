import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecialidadeCardMobileComponent } from './especialidade-card-mobile.component';

describe('EspecialidadeCardMobileComponent', () => {
  let component: EspecialidadeCardMobileComponent;
  let fixture: ComponentFixture<EspecialidadeCardMobileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EspecialidadeCardMobileComponent]
    });
    fixture = TestBed.createComponent(EspecialidadeCardMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
