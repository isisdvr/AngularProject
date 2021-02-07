import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datadisplay',
  templateUrl: './datadisplay.component.html',
  styleUrls: ['./datadisplay.component.scss']
})
export class DatadisplayComponent implements OnInit {
  title="Display Data Page"
  currentItem = "Television";
  post = {
    title: "Title",
    isFavorite: true,
  };
  courses=[
    { id: 1, name: "Angular" },
    { id: 2, name: "React" },
    { id: 3, name: "Laravel" },
  ];

  onFavoriteChanged(eventArgs) {
    console.log("Favor changed: ", eventArgs);
  }
  constructor() { }

  ngOnInit() {
  }

}
