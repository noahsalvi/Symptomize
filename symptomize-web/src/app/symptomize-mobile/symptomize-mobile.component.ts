import { Component, OnInit } from "@angular/core";
import { SymptomService } from "../symptom.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-symptomize-mobile",
  templateUrl: "./symptomize-mobile.component.html",
  styleUrls: ["./symptomize-mobile.component.scss"],
})
export class SymptomizeMobileComponent implements OnInit {
  symptoms = ["Bluten", "Stechen", "Schwellung", "Blau"];
  bodyAreaCoords = {
    head: {
      x: 0,
      y: 390,
      bodyParts: {},
    },
    torso: {
      x: 0,
      y: 130,
    },
    "right-arm": {
      x: 120,
      y: 100,
      bodyParts: {
        hand: {
          x: 160,
          y: -40,
        },
      },
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
  dictionary;
  zoomHeight = 957;
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

  constructor(private symptomService: SymptomService, private router: Router) {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit credit https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    // We listen to the resize event
    window.addEventListener("resize", () => {
      // We execute the same script as before
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    });
  }

  ngOnInit() {
    this.dictionary = this.symptomService.dictionary;
  }

  selectArea(bodyArea) {
    this.bodyArea = bodyArea;
    let currentLocation: any = document.getElementById("current-location");
    currentLocation.innerText = this.dictionary[this.bodyArea];
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
        document.getElementById("statesMap-2").style.opacity = "1";
      }, 500);

      document.getElementById("statesMap-2").style.transform =
        "translate(" +
        this.bodyAreaCoords[bodyArea].x +
        "px, " +
        this.bodyAreaCoords[bodyArea].y +
        "px)";
    }, 50);
  }

  selectPart(bodyPart) {
    this.bodyPart = bodyPart;

    let step1Text: any = document.getElementById("step-2").firstChild;
    step1Text.innerText = this.dictionary[this.bodyPart];
    this.updateTutorial(3);

    this.layer = 3;
    this.setupSymptoms();
    setTimeout(() => {
      document.getElementById("human-placeholder-image-3").style.transform =
        "translate(" +
        this.bodyAreaCoords[this.bodyArea].x +
        "px, " +
        this.bodyAreaCoords[this.bodyArea].y +
        "px)";

      setTimeout(() => {
        document.getElementById("human-placeholder-image-3").className =
          "transition-on";
        document.getElementById("statesMap-2").style.opacity = "0";
        document.getElementById("human-placeholder-3").style.opacity = "1";
        document.getElementById("human-placeholder-image-3").style.transform =
          "translate(" +
          this.bodyAreaCoords[this.bodyArea].bodyParts[this.bodyPart].x +
          "px, " +
          this.bodyAreaCoords[this.bodyArea].bodyParts[this.bodyPart].y +
          "px)";
        document.getElementById("statesMap-2").style.zIndex = "-10";
      }, 50);
    });
  }

  setupSymptoms() {
    let symptomBox = document.getElementById("symptom-box");
    let continueButton = document.getElementById("continue-button");
    let newHtml = "";
    let counter = 0;
    symptomBox.style.display = "block";
    continueButton.style.display = "flex";
    this.symptoms.forEach((symptom) => {
      if (counter == 0) {
        newHtml += "<div class='symptom-line'>";
      }
      counter++;
      newHtml +=
        "<div class='symptom'><label>" +
        symptom +
        "<input type='checkbox'/></label></div>";

      if (counter == 3) {
        newHtml += "</div>";
        counter = 0;
      }
    });
    symptomBox.innerHTML = newHtml;
  }

  removeSymptoms() {
    let symptomBox = document.getElementById("symptom-box");
    let continueButton = document.getElementById("continue-button");

    symptomBox.style.display = "";
    symptomBox.innerHTML = "";
    continueButton.style.display = "";
    continueButton.className = "";
  }

  validateContinuation() {
    let canContinue = false;
    let symptomBox = document.getElementById("symptom-box");
    let symptoms = Array.prototype.slice.call(
      symptomBox.getElementsByClassName("symptom")
    );
    symptoms.forEach((symptom) => {
      let symptomChecked = symptom.children[0].children[0].checked;
      if (symptomChecked) {
        canContinue = true;
        return;
      }
    });
    let continueButton = document.getElementById("continue-button");
    if (canContinue) {
      continueButton.className = "active";
    } else {
      continueButton.className = "";
    }
  }

  continue() {
    let applicableSymptoms = [];

    let symptomBox = document.getElementById("symptom-box");
    let symptoms = Array.prototype.slice.call(
      symptomBox.getElementsByClassName("symptom")
    );
    symptoms.forEach((symptom) => {
      let symptomChecked = symptom.children[0].children[0].checked;
      if (symptomChecked) {
        applicableSymptoms.push(symptom.innerText);
      }
    });

    if (applicableSymptoms.length > 0) {
      let newEntry = {
        bodyArea: this.bodyArea,
        bodyPart: this.bodyPart,
        symptoms: applicableSymptoms,
      };
      this.symptomService.profile.push(newEntry);
      console.log(newEntry);
      console.log(this.symptomService.profile);
      this.router.navigate(["quittung"]);
    } else {
      this.validateContinuation();
    }
  }

  return() {
    switch (this.layer) {
      case 2: {
        this.updateTutorial(1);
        this.layer = 0;
        document.getElementById("statesMap-2").style.opacity = "0";

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

      case 3: {
        this.updateTutorial(2);
        this.removeSymptoms();
        document.getElementById("human-placeholder-image-3").style.transform =
          "translate(" +
          this.bodyAreaCoords[this.bodyArea].x +
          "px, " +
          this.bodyAreaCoords[this.bodyArea].y +
          "px)";
        let step1Text: any = document.getElementById("step-2").firstChild;
        step1Text.innerText = "Klicke auf ein Körperteil";
        setTimeout(() => {
          this.layer = 2;

          setTimeout(() => {
            document.getElementById("statesMap-2").style.zIndex = "0";
            document.getElementById("statesMap-2").style.opacity = "1";
            document.getElementById("human-placeholder-3").style.opacity = "0";
          });
        }, 500);

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
        document.getElementById("tutorial").style.animationPlayState =
          "running";
        document.getElementById("step-text").innerText =
          "Tippe auf ein Körperbereich";
        break;
      case 2:
        document.getElementById("tutorial").style.animationPlayState =
          "running";
        document.getElementById("step-text").innerText =
          "Tippe auf ein Körperteil";
        break;
      case 3:
        document.getElementById("current-step").style.top = pos3;
        break;
    }
  }
}
