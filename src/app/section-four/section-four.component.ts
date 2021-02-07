import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-section-four',
  templateUrl: './section-four.component.html',
  styleUrls: ['./section-four.component.scss'],
  encapsulation:ViewEncapsulation.Emulated //default
})
export class SectionFourComponent implements OnInit {
onKeyUp(email) {
  console.log(email);
}
myemail="domain.com";
onKeyUp2() {
  console.log(this.myemail);
}
  constructor() { }

  ngOnInit() {
  }

}
