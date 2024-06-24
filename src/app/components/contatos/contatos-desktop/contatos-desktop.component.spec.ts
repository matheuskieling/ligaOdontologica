import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatosDesktopComponent } from './contatos-desktop.component';

describe('ContatosDesktopComponent', () => {
  let component: ContatosDesktopComponent;
  let fixture: ComponentFixture<ContatosDesktopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContatosDesktopComponent]
    });
    fixture = TestBed.createComponent(ContatosDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
