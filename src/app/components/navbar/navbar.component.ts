import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private autService: AuthService, private dataService: DataService) {
  }


  logOut() {
    this.autService.logout()
  }
}
