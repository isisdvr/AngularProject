import { Component, OnInit } from "@angular/core";
import { FormArray, FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-new-course-form-component",
  templateUrl: "./new-course-form-component.component.html",
  styleUrls: ["./new-course-form-component.component.scss"],
})
export class NewCourseFormComponentComponent implements OnInit {
  form = new FormGroup({
    topics: new FormArray([]),
  });

  addTopic(topic: HTMLInputElement) {
    this.topics.push(new FormControl(topic.value));
    topic.value = "";
  }
  removeTopic(topic: FormControl) {
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }
  get topics() {
    return this.form.get("topics") as FormArray;
  }
  constructor() {}

  ngOnInit() {}
}
