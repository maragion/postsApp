import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../services/auth.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  login: string | null;

  constructor(private autService: AuthService, private router: Router) {
    this.loginForm = new FormGroup({
      login: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required)
    })
    this.login = localStorage.getItem("user");
  }

  logIn() {
    let login = this.loginForm.value.login;
    let pass = this.loginForm.value.password;

    this.autService.login(login, pass);
    if(AuthService) {
      this.router.navigate(['/posts'])
    }
  }

  logOut() {
    this.autService.logout()
    this.login = null
  }

}
