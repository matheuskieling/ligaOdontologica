import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamPageDesktopComponent } from './team-page-desktop.component';

describe('TeamPageDesktopComponent', () => {
  let component: TeamPageDesktopComponent;
  let fixture: ComponentFixture<TeamPageDesktopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamPageDesktopComponent]
    });
    fixture = TestBed.createComponent(TeamPageDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
