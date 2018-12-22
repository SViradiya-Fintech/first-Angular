import * as tslib_1 from "tslib";
import { Directive, ElementRef, HostListener, Input } from "@angular/core";
var ValidateEmailDirective = /** @class */ (function () {
    function ValidateEmailDirective(elRef) {
        this.elRef = elRef;
    }
    ValidateEmailDirective.prototype.onBlur = function () {
        console.log("validate email called");
        this.value = this.elRef.nativeElement.value;
        if (this.value.indexOf("@") > 0) {
            console.log("email found");
            this.elRef.nativeElement.style.color = "#00cc66";
            this.elRef.nativeElement.style.backgroundColor = "#ccccff";
            this.elRef.nativeElement.style.fontSize = "20px";
        }
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], ValidateEmailDirective.prototype, "value", void 0);
    tslib_1.__decorate([
        HostListener("blur"),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", void 0)
    ], ValidateEmailDirective.prototype, "onBlur", null);
    ValidateEmailDirective = tslib_1.__decorate([
        Directive({
            selector: "[appValidateEmail]"
        }),
        tslib_1.__metadata("design:paramtypes", [ElementRef])
    ], ValidateEmailDirective);
    return ValidateEmailDirective;
}());
export { ValidateEmailDirective };
//# sourceMappingURL=validate-email.directive.js.map