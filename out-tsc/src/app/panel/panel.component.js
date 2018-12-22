import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
var PanelComponent = /** @class */ (function () {
    function PanelComponent() {
        this.panelContent = [1, 2];
    }
    PanelComponent.prototype.loadCourse = function () {
        this.courses = [
            { id: 1, name: "Course1" },
            { id: 2, name: "Course2" },
            { id: 3, name: "Course3" },
            { id: 4, name: "Course4" }
        ];
    };
    PanelComponent.prototype.onCourseAdd = function () {
        this.courses.push({ id: 5, name: "course5" });
    };
    PanelComponent.prototype.onRemove = function (course) {
        var index = this.courses.indexOf(course);
        this.courses.splice(index, 1);
    };
    PanelComponent.prototype.trackByCourse = function (index, course) {
        return index;
    };
    PanelComponent.prototype.ngOnInit = function () { };
    PanelComponent = tslib_1.__decorate([
        Component({
            selector: "app-panel",
            templateUrl: "./panel.component.html",
            styleUrls: ["./panel.component.css"]
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], PanelComponent);
    return PanelComponent;
}());
export { PanelComponent };
//# sourceMappingURL=panel.component.js.map