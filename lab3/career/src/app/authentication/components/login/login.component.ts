import { EventEmitter } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'career-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() public login: EventEmitter<any> = new EventEmitter<any>();

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    pwd: new FormControl('', [Validators.required])
  });

  

  hide = true;

  getErrorMessage() {
    if (this.loginForm['email'].hasError('required')) {
      return 'You must enter a value';
    } else if (this.loginForm['pwd'].hasError('email')) {
      return 'Not a valid email';
    } else return '';
  }

  onLogin() {
    this.login.emit(this.loginForm.value);
  }

}
