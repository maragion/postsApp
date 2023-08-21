import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor() {
  }

  login(login: string, pass: string) {
    let userData: string = login + pass;
    let token: string = this.createFakeToken(userData)
    localStorage.setItem('user', login)
    localStorage.setItem('currentUser', token)
    return this.isUserLogged()
  }

  createFakeToken(data: string) {
    return window.btoa(data);
  }

  isUserLogged() {
    return localStorage.getItem("currentUser")
  }

  logout() {
    localStorage.clear()
  }
}
