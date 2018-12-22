import { FormGroup, FormArray, FormControl } from "@angular/forms";
import {
  Component,
  OnInit,
  HostListener,
  ElementRef,
  Renderer
} from "@angular/core";

@Component({
  selector: "app-form-arrays-example",
  templateUrl: "./form-arrays-example.component.html",
  styleUrls: ["./form-arrays-example.component.css"]
})
export class FormArraysExampleComponent implements OnInit {
  constructor() {}

  form = new FormGroup({
    topics: new FormArray([])
  });
  ngOnInit() {}

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
