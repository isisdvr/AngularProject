import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mycourse',
  templateUrl: './mycourse.component.html',
  styleUrls: ['./mycourse.component.scss']
})
export class MycourseComponent implements OnInit {
  courses;
  canSave = true;
  constructor() { }
  onAdd() {
    this.courses.push({
      id: 4,
      name: "Visual Basic",
    });
  }
  onRemove(course) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }
  onChange(course) {
    course.name = course.name + " Updated";
  }

  loadCourses() {
    this.courses = [
      { id: 1, name: "Angular" },
      { id: 2, name: "React" },
      { id: 3, name: "Laravel" },
    ];
  }

  trackCourse(index, course) {
    course ? course.id : undefined;
  }

  ngOnInit() {
  }

}
