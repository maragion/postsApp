import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router, RoutesRecognized} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  backBtn: boolean = false

  constructor(private autService: AuthService, private route: Router) {
  }


  ngOnInit() {
    this.route.events.subscribe((data) => {
      if (data instanceof RoutesRecognized) {
        let url: string = data.state.url
        this.backBtn = url !== "/posts";
      }
    });
  }

  logOut() {
    this.autService.logout()
  }
}
