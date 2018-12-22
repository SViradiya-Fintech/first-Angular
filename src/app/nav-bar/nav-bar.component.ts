import { environment } from "./../../environments/environment";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.css"]
})
export class NavBarComponent implements OnInit {
  backgroundColor = environment.backgroundColor;
  constructor() {}

  ngOnInit() {}
}
