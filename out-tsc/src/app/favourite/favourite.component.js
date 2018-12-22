import * as tslib_1 from "tslib";
import { Component, Input, EventEmitter, Output } from "@angular/core";
var FavouriteComponent = /** @class */ (function () {
    function FavouriteComponent() {
        this.change = new EventEmitter();
    }
    FavouriteComponent.prototype.ngOnInit = function () {
        console.log("initial" + this.isFavourite);
    };
    FavouriteComponent.prototype.onClick = function () {
        this.isFavourite = !this.isFavourite;
        console.log(this.isFavourite);
        this.change.emit({ newValue: this.isFavourite });
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], FavouriteComponent.prototype, "isFavourite", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], FavouriteComponent.prototype, "imageSrc", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], FavouriteComponent.prototype, "change", void 0);
    FavouriteComponent = tslib_1.__decorate([
        Component({
            selector: "app-favourite",
            templateUrl: "./favourite.component.html",
            styleUrls: ["./favourite.component.css"],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], FavouriteComponent);
    return FavouriteComponent;
}());
export { FavouriteComponent };
//# sourceMappingURL=favourite.component.js.map