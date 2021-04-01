import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'career-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  @Output()
  public logout: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  public onLogoutClick(): void {
    this.logout.emit();
  }

}
