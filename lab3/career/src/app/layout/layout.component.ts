import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public toggleSidenavState(): void {
    document.getElementById("sidenav").classList.toggle("sidenav-closed");
    document.getElementById("sidenav").classList.toggle("sidenav-opened");
    document.getElementById("layout").classList.toggle("sidenav-closed-layout");
    document.getElementById("layout").classList.toggle("sidenav-opened-layout");
    document.getElementById("sidenavToggleIcon").classList.toggle("change");
  }
}
