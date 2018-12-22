import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UsenameValidators } from "./username.validators";
var SignupFormComponent = /** @class */ (function () {
    function SignupFormComponent() {
        this.form = new FormGroup({
            account: new FormGroup({
                username: new FormControl("", [
                    Validators.required,
                    Validators.minLength(3),
                    Validators.maxLength(5),
                    UsenameValidators.CannotContainspace
                ], UsenameValidators.UserNameShouldBeUnique),
                password: new FormControl("", Validators.required)
            })
        });
    }
    Object.defineProperty(SignupFormComponent.prototype, "username", {
        get: function () {
            return this.form.get("account.username");
        },
        enumerable: true,
        configurable: true
    });
    SignupFormComponent.prototype.signup = function () {
        // service call to validate inputs
        this.username.setErrors({ invalidLogin: true });
        this.form.setErrors({ invalidLogin: true });
    };
    SignupFormComponent.prototype.ngOnInit = function () { };
    SignupFormComponent = tslib_1.__decorate([
        Component({
            selector: "app-signup-form",
            templateUrl: "./signup-form.component.html",
            styleUrls: ["./signup-form.component.css"]
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], SignupFormComponent);
    return SignupFormComponent;
}());
export { SignupFormComponent };
//# sourceMappingURL=signup-form.component.js.map