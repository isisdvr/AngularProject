import { Component, OnInit } from "@angular/core";

@Component({
  selector: "courses",
  template: ` <h1>
      Property Binding in CoursesComponent (courses.components.ts)
    </h1>
    <button class="btn btn-primary" [class.active]="isActive">Save</button>
    <h2>Class binding</h2>
    <button [style.backgroundColor]="isActive ? 'red' : 'white'">Exit</button>
    <br />
    <h1>Event Binding</h1>
    <div (click)="onDivClicked()">
      <button class="btn btn-danger" (click)="onSave($event)">Click Me</button>
    </div>
    <div>
      <h3>using onkeyup event with parameter $event</h3>
      <input type="text" (keyup)="onKeyUp($event)" />
    </div>
    <div>
      <p>using keyup.enter without parameter $event</p>
      <input type="text" (keyup.enter)="onKeyUp2()" />
    </div>
    <div>
      <h4>using keyup.enter with parameter $event value=$event.target.value</h4>
      <input type="text" (keyup.enter)="onKeyUp3($event)" />
    </div>
    <div>
      <h4>Template variable #email</h4>
      <input type="text" #email (keyup.enter)="onKeyUp4(email.value)" />
      <div>
        <div>
          <h4>Two way binding Method1</h4>
          <input
            type="text"
            [value]="email2"
            (keyup.enter)="email2 = $event.target.value; onKeyUp5()"
          />
          <div>
            <div>
              <h4>Two way binding Method2</h4>
              <input
                type="text"
                [(ngModel)]="email3"
                (keyup.enter)="onKeyUp6()"
              />
              <div>
                <h2>Courses</h2>
                <h2>{{ title }}</h2>
                <h2 [textContent]="title"></h2>
                <br />
                <h2>Attribute Binding</h2>
                <table>
                  <tr>
                    <td [attr.colspan]="colspan">Hello World!!!</td>
                  </tr>
                  <tr>
                    <td>Hola</td>
                    <td>Amigos</td>
                  </tr>
                </table>
                <img src="{{ imageUrl }}" />
                <img [src]="imageUrl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`,
  styleUrls: ["./courses.component.scss"],
})
export class CoursesComponent implements OnInit {
  constructor() {}
  title = "List of courses";
  imageUrl =
    "https://imgnews.pstatic.net/image/001/2021/01/09/PCM20190411000303990_P4_20210109110732330.jpg?type=nf300_190";
  colspan = 2;
  isActive = true;
  email2 = "me@example.com";
  email3 = "alex@yahoo.com";
  onSave($event) {
    $event.stopPropagation();
    console.log("button was clicked", $event);
  }
  onDivClicked() {
    console.log("div was clicked");
  }

  onKeyUp($event) {
    if ($event.keyCode === 13) {
      console.log("enter was pressed");
    }
  }

  onKeyUp2() {
    console.log("On key Up 2 was pressed");
  }
  onKeyUp3($event) {
    console.log($event.target.value);
  }

  onKeyUp4(email) {
    console.log(email);
  }

  onKeyUp5(email) {
    console.log(this.email2);
  }

  onKeyUp6(email) {
    console.log(this.email3);
  }
  ngOnInit() {}
}
