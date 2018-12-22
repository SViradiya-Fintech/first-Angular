import * as tslib_1 from "tslib";
import { Directive, HostListener, Input, ElementRef, Renderer } from "@angular/core";
var InputFormatDirective = /** @class */ (function () {
    function InputFormatDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    InputFormatDirective.prototype.onFocus = function () {
        console.log("on focus");
    };
    InputFormatDirective.prototype.onBlur = function () {
        console.log("blur");
        var name = this.el.nativeElement.value;
        if (this.format === "uppercase") {
            this.el.nativeElement.value = name.toUpperCase();
        }
        else {
            this.el.nativeElement.value = name.toLowerCase();
        }
    };
    InputFormatDirective.prototype.onmouseenter = function () {
        this.renderer.setElementStyle(this.el.nativeElement, "color", "red");
        this.renderer.setElementStyle(this.el.nativeElement, "text-transform", "uppercase");
    };
    InputFormatDirective.prototype.mouseleave = function () {
        this.renderer.setElementStyle(this.el.nativeElement, "color", "black");
        this.renderer.setElementStyle(this.el.nativeElement, "text-transform", "lowercase");
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], InputFormatDirective.prototype, "format", void 0);
    tslib_1.__decorate([
        HostListener("focus"),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", void 0)
    ], InputFormatDirective.prototype, "onFocus", null);
    tslib_1.__decorate([
        HostListener("blur"),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", void 0)
    ], InputFormatDirective.prototype, "onBlur", null);
    tslib_1.__decorate([
        HostListener("mouseover"),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", void 0)
    ], InputFormatDirective.prototype, "onmouseenter", null);
    tslib_1.__decorate([
        HostListener("mouseleave"),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", void 0)
    ], InputFormatDirective.prototype, "mouseleave", null);
    InputFormatDirective = tslib_1.__decorate([
        Directive({
            selector: "[appInputFormat]"
        }),
        tslib_1.__metadata("design:paramtypes", [ElementRef, Renderer])
    ], InputFormatDirective);
    return InputFormatDirective;
}());
export { InputFormatDirective };
//# sourceMappingURL=input-format.directive.js.map