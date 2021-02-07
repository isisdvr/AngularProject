import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
 
  blue = "blue";
  title = "This is my angular";
  isSelected = true;

 
 


  // onFavoriteChanged(isFavorite) {
  //   console.log("Favor changed: ", isFavorite);
  // }
}
