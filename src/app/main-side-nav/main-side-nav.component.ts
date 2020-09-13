import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'lk-main-side-nav',
  templateUrl: './main-side-nav.component.html',
  styleUrls: ['./main-side-nav.component.css']
})
export class MainSideNavComponent implements OnInit {

  constructor(public breakpointObserver: BreakpointObserver
  ) { }

  smallSize: boolean = false;

  ngOnInit(): void {
    this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.HandsetPortrait])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.smallSize = true;
        } else {
          this.smallSize = false;
        }
      });    
  }
}
