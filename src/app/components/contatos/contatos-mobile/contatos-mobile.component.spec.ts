import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatosMobileComponent } from './contatos-mobile.component';

describe('ContatosMobileComponent', () => {
  let component: ContatosMobileComponent;
  let fixture: ComponentFixture<ContatosMobileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContatosMobileComponent]
    });
    fixture = TestBed.createComponent(ContatosMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
