import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamPageMobileComponent } from './team-page-mobile.component';

describe('TeamPageMobileComponent', () => {
  let component: TeamPageMobileComponent;
  let fixture: ComponentFixture<TeamPageMobileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamPageMobileComponent]
    });
    fixture = TestBed.createComponent(TeamPageMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
