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
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                if (control.value === "sagar") {
                    console.log("async validatior invalid called", control.value);
                    resolve({ shouldbeunique: true });
                }
                else {
                    console.log("async validatior null called", control.value);
                    resolve(null);
                }
            }, 2000);
        });
    };
    return UsenameValidators;
}());
export { UsenameValidators };
//# sourceMappingURL=username.validators.js.map