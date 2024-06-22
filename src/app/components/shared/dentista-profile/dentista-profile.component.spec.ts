import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DentistaProfileComponent } from './dentista-profile.component';

describe('DentistaProfileComponent', () => {
  let component: DentistaProfileComponent;
  let fixture: ComponentFixture<DentistaProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DentistaProfileComponent]
    });
    fixture = TestBed.createComponent(DentistaProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
