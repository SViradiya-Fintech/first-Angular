"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var CoursesComponent = /** @class */ (function () {
    function CoursesComponent(courseService) {
        this.cols = 2;
        this.title = "first angular app";
        this.isActive = Math.random() * 10 > 5;
        this.imageUrl = "https://d3e1o4bcbhmj8g.cloudfront.net/photos/313391/big_square/3bc6a9073cf0de7bf859d85a97dd1a067d14f754.jpg";
        this.courses = courseService.getCourse();
    }
    CoursesComponent.prototype.buttonSave = function ($event) {
        console.log("button is called" + $event);
    };
    CoursesComponent = __decorate([
        core_1.Component({
            // tslint:disable-next-line:component-selector
            selector: "courses",
            templateUrl: "./courses.component.html",
            styleUrls: ["./courses.component.css"]
        })
    ], CoursesComponent);
    return CoursesComponent;
}());
exports.CoursesComponent = CoursesComponent;
