import { Component } from "@angular/core";
import { FavouriteChangedEventArgs } from "./favourite/FavouriteChangedEventArgs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title: "first-angular";
  Isfavourite = true;
  imageSrc = "https://image.flaticon.com/teams/slug/google.jpg";
  onFavChange(e: FavouriteChangedEventArgs) {
    console.log("fav changed", e);
  }

}
