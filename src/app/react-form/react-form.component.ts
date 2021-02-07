import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { UsernameValidators } from "./username.validators";

@Component({
  selector: "app-react-form",
  templateUrl: "./react-form.component.html",
  styleUrls: ["./react-form.component.scss"],
})
export class ReactFormComponent implements OnInit {
  form = new FormGroup({
    username: new FormControl("here goes initial value", [
      Validators.required,
      Validators.minLength(3),
      UsernameValidators.cannotContainSpace],
      UsernameValidators.shouldBeUnique,
    ),
    password: new FormControl("", Validators.required),
  });

  login() {
    this.form.setErrors({
      invalidLogin: true,
    });
  }
  get username() {
    return this.form.get("username");
  }

  constructor() {}
  name = new FormControl("");

  updateName() {
    this.name.setValue("Nancy");
  }

  ngOnInit() {}
}
