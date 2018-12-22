import { Component, OnInit, Input, EventEmitter, Output, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-favourite",
  templateUrl: "./favourite.component.html",
  styleUrls: ["./favourite.component.css"],
  // encapsulation: ViewEncapsulation.Emulated,
})
export class FavouriteComponent implements OnInit {
  @Input() isFavourite: boolean;
  @Input() imageSrc: string;
  @Output() change = new EventEmitter();
  constructor() {}
  ngOnInit() {
    console.log("initial" + this.isFavourite);
  }
  onClick() {
    this.isFavourite = !this.isFavourite;
    console.log(this.isFavourite);
    this.change.emit({newValue: this.isFavourite});
  }

}
