import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

export class AuthService {
  constructor(private http: HttpClient) {}

  login(credentials) {}
  logout() {}
  isLoggedIn() {
    return false;
  }
}
