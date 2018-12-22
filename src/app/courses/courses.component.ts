import { Component } from "@angular/core";
import { CoursesService } from "../services/course.service";

class Names {
  constructor(public id?: number, public name?: string) {}
}
class Course {
  Id: number;
  Name: string;
  Price: number;
  StartDate: Date;

  constructor(id?: number, name?: string, price?: number, startDate?: Date) {
    this.Id = id;
    this.Name = name;
    this.Price = price;
    this.StartDate = startDate;
  }
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: "courses",
  templateUrl: "./courses.component.html",
  styleUrls: ["./courses.component.css"]
})
export class CoursesComponent {
  cols = 2;
  selectedName;
  address: Names[] = [
    new Names(1, "first"),
    new Names(2, "second"),
    new Names(3, "third")
  ];
  title = "first angular app";
  fname = "this is test1";
  courses: string[];
  isActive = Math.random() * 10 > 5;
  imageUrl =
    "https://d3e1o4bcbhmj8g.cloudfront.net/photos/313391/big_square/3bc6a9073cf0de7bf859d85a97dd1a067d14f754.jpg";

  CourseList: Course[] = [
    new Course(1, "test", 134.34, new Date()),
    new Course(2, "test1", 14.3423, new Date()),
    new Course(3, "test2", 4.3324, new Date()),
    new Course(4, "test3", 14.34232, new Date())
  ];
  constructor(courseService: CoursesService) {
    this.courses = courseService.getCourse();
  }
  getCourseWithObject() {
    return this.CourseList;
  }

  buttonSave($event, name) {
    console.log("button is called" + $event);
    console.log("value from textbox " + name);
    this.fname = name;
    console.log("property name" + this.fname);
  }
  onEventup_old($event, name) {
    console.log($event);
    if ($event.keyCode === 13) {
      console.log("Enter key was pressed");
    }
    console.log(name);
  }
  onEventUpWithTwoBinding() {
    console.log("fname property " + this.fname);
  }
  onChangeName() {
    console.log("selected name" + this.selectedName);
  }
}
