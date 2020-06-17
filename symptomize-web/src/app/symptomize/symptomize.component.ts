import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-symptomize",
  templateUrl: "./symptomize.component.html",
  styleUrls: ["./symptomize.component.scss"],
})
export class SymptomizeComponent implements OnInit {
  config = {
    fade: true,
    alwaysOn: false,
    neverOn: false,

    // fill
    fill: true,
    fillColor: "#ffffff",
    fillOpacity: 0.4,

    // stroke
    stroke: true,
    strokeColor: "#5BC0BE",
    strokeOpacity: 1,
    strokeWidth: 2,

    // shadow:
    shadow: true,
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 10,
  };

  constructor() {}

  ngOnInit() {}

  select(bodyPart) {
    if (bodyPart == "head") {
      document.getElementById("human").style.height = "1000px";
      document.getElementById("human").style.transform = "translatey(390px)";
    }
  }
}
