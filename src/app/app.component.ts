import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],

  template: `
    <p>My birthday date is {{ birthday | date }}</p>
  `
})
export class AppComponent {
  title = "CustomPipesDemo";

  birthday = new Date(1993, 1, 4);
  //toggle = true; // start with true == shortDate

  //get format()   { return this.toggle ? 'shortDate' : 'fullDate'; }
  //toggleFormat() { this.toggle = !this.toggle; }
}
//<!-- <p>The birthday on event is {{ birthday | date:format }}</p>
// <button (click)="toggleFormat()">Toggle Format</button>
