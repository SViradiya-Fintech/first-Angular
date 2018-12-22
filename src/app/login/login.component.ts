import { AuthService } from "./../auth.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  invalidLogin: boolean;
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {}

  signIn(credentials) {
    this.authService.login(credentials);
  }
  OnSubmit(value) {}
}
