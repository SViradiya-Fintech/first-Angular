import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.Isfavourite = true;
        this.imageSrc = "https://image.flaticon.com/teams/slug/google.jpg";
    }
    AppComponent.prototype.onFavChange = function (e) {
        console.log("fav changed", e);
    };
    AppComponent = tslib_1.__decorate([
        Component({
            selector: "app-root",
            templateUrl: "./app.component.html",
            styleUrls: ["./app.component.css"]
        })
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map