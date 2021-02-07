import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-profile-editor",
  templateUrl: "./profile-editor.component.html",
  styleUrls: ["./profile-editor.component.scss"],
})
export class ProfileEditorComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  profileForm = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    address: new FormGroup({
      street: new FormControl(""),
      city: new FormControl(""),
      state: new FormControl(""),
      zip: new FormControl(""),
    }),
  });

  profileFormBuilder = this.fb.group({
    firstNameBuilder: ["", Validators.required],
    lastNameBuilder: [""],
    addressBuilder: this.fb.group({
      streetBuilder: [""],
      cityBuilder: [""],
      stateBuilder: [""],
      zipBuilder: [""],
    }),
  });

  onSubmit() {
    console.warn(this.profileForm.value);
  }
  onSubmit2() {
    console.warn(this.profileFormBuilder.value);
  }

  updateProfile() {
    this.profileForm.patchValue({
      firstName: "Nancy",
      address: {
        street: "123 Drew Street",
      },
    });
  }
  updateProfile2() {
    this.profileFormBuilder.patchValue({
      firstNameBuilder: "Nancy",
      addressBuilder: {
        streetBuilder: "123 Drew Street",
      },
    });
  }
  updateIndividualControl() {
    this.profileForm.setValue({
      firstName: "carlota",
      lastName: "lopez",
      address: {
        street: "homero",
        city: "new youk",
        state: "los angeles",
        zip: "123456",
      },
    });
  }
  updateIndividualControl2() {
    this.profileFormBuilder.setValue({
      firstNameBuilder: "carlota",
      lastNameBuilder: "lopez",
      addressBuilder: {
        streetBuilder: "homero",
        cityBuilder: "new youk",
        stateBuilder: "los angeles",
        zipBuilder: "123456",
      },
    });
  }

  ngOnInit() {}
}
