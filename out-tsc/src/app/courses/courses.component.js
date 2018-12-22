import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { CoursesService } from "../services/course.service";
var Names = /** @class */ (function () {
    function Names(id, name) {
        this.id = id;
        this.name = name;
    }
    return Names;
}());
var Course = /** @class */ (function () {
    function Course(id, name, price, startDate) {
        this.Id = id;
        this.Name = name;
        this.Price = price;
        this.StartDate = startDate;
    }
    return Course;
}());
var CoursesComponent = /** @class */ (function () {
    function CoursesComponent(courseService) {
        this.cols = 2;
        this.address = [
            new Names(1, "first"),
            new Names(2, "second"),
            new Names(3, "third")
        ];
        this.title = "first angular app";
        this.fname = "this is test1";
        this.isActive = Math.random() * 10 > 5;
        this.imageUrl = "https://d3e1o4bcbhmj8g.cloudfront.net/photos/313391/big_square/3bc6a9073cf0de7bf859d85a97dd1a067d14f754.jpg";
        this.CourseList = [
            new Course(1, "test", 134.34, new Date()),
            new Course(2, "test1", 14.3423, new Date()),
            new Course(3, "test2", 4.3324, new Date()),
            new Course(4, "test3", 14.34232, new Date())
        ];
        this.courses = courseService.getCourse();
    }
    CoursesComponent.prototype.getCourseWithObject = function () {
        return this.CourseList;
    };
    CoursesComponent.prototype.buttonSave = function ($event, name) {
        console.log("button is called" + $event);
        console.log("value from textbox " + name);
        this.fname = name;
        console.log("property name" + this.fname);
    };
    CoursesComponent.prototype.onEventup_old = function ($event, name) {
        console.log($event);
        if ($event.keyCode === 13) {
            console.log("Enter key was pressed");
        }
        console.log(name);
    };
    CoursesComponent.prototype.onEventUpWithTwoBinding = function () {
        console.log("fname property " + this.fname);
    };
    CoursesComponent.prototype.onChangeName = function () {
        console.log("selected name" + this.selectedName);
    };
    CoursesComponent = tslib_1.__decorate([
        Component({
            // tslint:disable-next-line:component-selector
            selector: "courses",
            templateUrl: "./courses.component.html",
            styleUrls: ["./courses.component.css"]
        }),
        tslib_1.__metadata("design:paramtypes", [CoursesService])
    ], CoursesComponent);
    return CoursesComponent;
}());
export { CoursesComponent };
//# sourceMappingURL=courses.component.js.map