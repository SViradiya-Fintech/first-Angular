import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UsenameValidators } from "./username.validators";

@Component({
  selector: "app-signup-form",
  templateUrl: "./signup-form.component.html",
  styleUrls: ["./signup-form.component.css"]
})
export class SignupFormComponent implements OnInit {
  constructor() {}
  form = new FormGroup({
    account: new FormGroup({
      username: new FormControl(
        "",
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(5),
          UsenameValidators.CannotContainspace
        ],
        UsenameValidators.UserNameShouldBeUnique
      ),
      password: new FormControl("", Validators.required)


    })
  });
  get username() {
    return this.form.get("account.username");
  }

  signup() {
    // service call to validate inputs
    this.username.setErrors({ invalidLogin: true });
    this.form.setErrors({ invalidLogin: true });
  }
  ngOnInit() {}
}
