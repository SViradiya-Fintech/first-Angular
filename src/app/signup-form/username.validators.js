"use strict";
exports.__esModule = true;
var UsenameValidators = /** @class */ (function () {
    function UsenameValidators() {
    }
    UsenameValidators.CannotContainspace = function (control) {
        if (control.value.indexOf(" ") !== -1) {
            return { CannotContainspace: true };
        }
        return null;
    };
    UsenameValidators.UserNameShouldBeUnique = function (control) {
        return new Promise(function (resolve) {
            setTimeout(function () {
                if (control.value.toLowerCase() === "sagar") {
                    console.log("async validatior called");
                    resolve({ shouldbeunique: true });
                }
                else {
                    resolve(null);
                }
            }, 2000);
        });
    };
    UsenameValidators.AsyncUserNameShouldBeUnique = function (control) {
        return new Promise(function (resolve) {
            setTimeout(function () {
                if (control.value.toLowerCase() === "sagar") {
                    console.log("async validatior called");
                    resolve({ Asyncshouldbeunique: true });
                }
                else {
                    resolve(null);
                }
            }, 2000);
        });
    };
    return UsenameValidators;
}());
exports.UsenameValidators = UsenameValidators;
