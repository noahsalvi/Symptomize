import { Component, OnInit } from "@angular/core";
import { SymptomService } from "../symptom.service";

@Component({
  selector: "app-symptomize",
  templateUrl: "./symptomize.component.html",
  styleUrls: ["./symptomize.component.scss"],
})
export class SymptomizeComponent implements OnInit {
  bodyAreaCoords = {
    head: {
      x: 0,
      y: 390,
    },
    torso: {
      x: 0,
      y: 130,
    },
    "right-arm": {
      x: 120,
      y: 100,
    },
    "right-leg": {
      x: 70,
      y: -230,
    },
    "left-leg": {
      x: -70,
      y: -230,
    },
    "left-arm": {
      x: -120,
      y: 100,
    },
  };
  zoomHeight = 1000;
  bodyArea: string;
  bodyPart: string;
  layer: number = 1; //default layer
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

  constructor(private symptomService: SymptomService) {}

  ngOnInit() {}

  selectArea(bodyArea) {
    this.bodyArea = bodyArea;
    let step1Text: any = document.getElementById("step-1").firstChild;
    step1Text.innerText = this.bodyArea;
    this.updateTutorial(2);

    this.layer = 0;
    setTimeout(() => {
      //needed because of bug with the transition
      document.getElementById("human-placeholder-image").style.height =
        this.zoomHeight + "px";

      document.getElementById("human-placeholder-image").style.transform =
        "translate(" +
        this.bodyAreaCoords[bodyArea].x +
        "px, " +
        this.bodyAreaCoords[bodyArea].y +
        "px)";

      setTimeout(() => {
        this.layer = 2;
        document.getElementById("statesMap-2").style.display = "block";
      }, 500);

      document.getElementById("statesMap-2").style.transform =
        "translate(" +
        this.bodyAreaCoords[bodyArea].x +
        "px, " +
        this.bodyAreaCoords[bodyArea].y +
        "px)";
    }, 50);
  }

  return() {
    switch (this.layer) {
      case 2: {
        this.updateTutorial(1);
        this.layer = 0;
        document.getElementById("statesMap-2").style.display = "none";

        setTimeout(() => {
          document.getElementById("human-placeholder-image").style.height =
            this.zoomHeight + "px";

          document.getElementById("human-placeholder-image").style.transform =
            "translate(" +
            this.bodyAreaCoords[this.bodyArea].x +
            "px, " +
            this.bodyAreaCoords[this.bodyArea].y +
            "px)";

          setTimeout(() => {
            document.getElementById("human-placeholder-image").style.height =
              "";
            document.getElementById("human-placeholder-image").style.transform =
              "";
          }, 50);
          let step1Text: any = document.getElementById("step-1").firstChild;
          step1Text.innerText = "Klicke auf ein Körperbereich";
          setTimeout(() => {
            this.layer = 1;
          }, 500);
        });
        break;
      }
    }
  }
  updateTutorial(step: number) {
    let pos1 = "";
    let pos2 = "80px";
    let pos3 = "160px";

    switch (step) {
      case 1:
        document.getElementById("current-step").style.top = pos1;
        break;
      case 2:
        document.getElementById("current-step").style.top = pos2;
        break;
      case 3:
        document.getElementById("current-step").style.top = pos3;
        break;
    }
    if (this.layer < step) {
      document.getElementById("step-" + (step - 1)).className = "step done";
      document.getElementById("step-" + step).className = "step";
    } else {
      document.getElementById("step-" + (step + 1)).className = "step inactive";
      document.getElementById("step-" + step).className = "step";
    }
  }
}
