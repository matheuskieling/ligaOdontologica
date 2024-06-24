import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveService {

  private screenTypeSubject: BehaviorSubject<string> = new BehaviorSubject<string>('desktop');
  public screenType$: Observable<string> = this.screenTypeSubject.asObservable();

  constructor(private breakpointObserver: BreakpointObserver) {
    this.monitorBreakpoints();
  }

  private monitorBreakpoints() {
    const breakpoints = [
      Breakpoints.HandsetPortrait,
      Breakpoints.HandsetLandscape,
      Breakpoints.TabletPortrait,
      Breakpoints.TabletLandscape,
      Breakpoints.WebPortrait,
      Breakpoints.WebLandscape,
    ];

    this.breakpointObserver.observe(breakpoints).pipe(
      map(result => {
        if (result.breakpoints[Breakpoints.HandsetPortrait] || result.breakpoints[Breakpoints.HandsetLandscape]) {
          return 'mobile';
        } else if (result.breakpoints[Breakpoints.TabletPortrait] || result.breakpoints[Breakpoints.TabletLandscape]) {
          return 'tablet';
        } else if (result.breakpoints[Breakpoints.WebPortrait] || result.breakpoints[Breakpoints.WebLandscape]) {
          return 'desktop';
        }
        return 'desktop'; // default case
      })
    ).subscribe(screenType => {
      this.screenTypeSubject.next(screenType);
    });

    // Initial check for the current state
    const initialScreenType = this.getInitialScreenType();
    this.screenTypeSubject.next(initialScreenType);
  }

  private getInitialScreenType(): string {
    if (this.breakpointObserver.isMatched([Breakpoints.HandsetPortrait, Breakpoints.HandsetLandscape])) {
      return 'mobile';
    } else if (this.breakpointObserver.isMatched([Breakpoints.TabletPortrait, Breakpoints.TabletLandscape])) {
      return 'tablet';
    } else if (this.breakpointObserver.isMatched([Breakpoints.WebPortrait, Breakpoints.WebLandscape])) {
      return 'desktop';
    }
    return 'desktop';
  }
}
