import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-panel",
  templateUrl: "./panel.component.html",
  styleUrls: ["./panel.component.css"]
})
export class PanelComponent implements OnInit {
  constructor() {}

  panelContent = [1, 2];
  courses;

  loadCourse() {
    this.courses = [
      { id: 1, name: "Course1" },
      { id: 2, name: "Course2" },
      { id: 3, name: "Course3" },
      { id: 4, name: "Course4" }
    ];
  }
  onCourseAdd() {
    this.courses.push({ id: 5, name: "course5" });
  }
  onRemove(course) {
    const index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }
  trackByCourse(index, course) {
    return index;
  }
  ngOnInit() {}
}
