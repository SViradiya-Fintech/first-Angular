import {
  animate,
  trigger,
  transition,
  style,
  useAnimation
} from "@angular/animations";
import { FormGroup, FormArray, FormControl } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { slideAnimation, bounceOutAnimation } from "../animations";

@Component({
  selector: "app-form-arrays-example",
  templateUrl: "./form-arrays-example.component.html",
  styleUrls: ["./form-arrays-example.component.css"],
  // animations: [slideAnimation],
  animations: [
    trigger("bounceOutAnimation", [
      transition(":enter", [
        style({
          opacity: 0,
          backgroundColor: "green",
          transform: "translateX(20px)"
        }),
        animate(2000)
      ]),
      transition(":leave", [
        style({ backgroundColor: "red" }),
        animate(1000),
        useAnimation(bounceOutAnimation)
      ])
    ])
  ]
})
export class FormArraysExampleComponent implements OnInit {
  constructor() {}
  data;
  form = new FormGroup({
    topics: new FormArray([])
  });
  ngOnInit() {
    this.data = [{ name: "sagar" }, { name: "sagar" }, { name: "sagar" }];
  }

  get topics() {
    return this.form.get("topics") as FormArray;
  }

  addTopics(topic: HTMLInputElement) {
    if (topic.value === "") {
      return false;
    }
    this.topics.push(new FormControl(topic.value));
    topic.value = "";
  }
  removeSelectedTopic(topic: FormControl) {
    const index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }
}
