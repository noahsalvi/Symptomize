import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { SymptomService } from "../symptom.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-symptomize",
  templateUrl: "./symptomize.component.html",
  styleUrls: ["./symptomize.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class SymptomizeComponent implements OnInit {
  symptoms = [
    "leichtes Bluten",
    "Starkes Bluten",
    "Stechen",
    "Schwellung",
    "Blau",
    "Verbrennung",
    "Aufgeschürft",
    "schmerzen",
  ];
  bodyAreaCoords;
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
    this.bodyAreaCoords = symptomService.bodyCoords;
  }

  ngOnInit() {
    this.dictionary = this.symptomService.dictionary;
  }

  selectArea(bodyArea) {
    this.bodyArea = bodyArea;
    let step1Text: any = document.getElementById("step-1").firstChild;
    step1Text.innerText = this.dictionary[this.bodyArea];
    this.updateTutorial(2);

    this.layer = 0;
    let placeholder = document.getElementById("human-placeholder");
    placeholder.style.opacity = "1";

    document.getElementById("human-placeholder-image").style.height =
      this.zoomHeight + "px";

    document.getElementById("human-placeholder-image").style.transform =
      "translate(" +
      this.bodyAreaCoords[bodyArea].x +
      "px, " +
      this.bodyAreaCoords[bodyArea].y +
      "px)";

    document.getElementById("human-placeholder-image").className =
      "transition-on";

    setTimeout(() => {
      document.getElementById("statesMap-2").style.transform =
        "translate(" +
        this.bodyAreaCoords[bodyArea].x +
        "px, " +
        this.bodyAreaCoords[bodyArea].y +
        "px)";

      setTimeout(() => {
        this.layer = 2;
        document.getElementById("human-placeholder").style.opacity = "";
        document.getElementById("statesMap-2").style.opacity = "1";
        document.getElementById("human-placeholder-image").className = "";
      }, 500);
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
          this.bodyAreaCoords[this.bodyPart].x +
          "px, " +
          this.bodyAreaCoords[this.bodyPart].y +
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
      this.router.navigate(["profil"]);
    } else {
      this.validateContinuation();
    }
  }

  return() {
    switch (this.layer) {
      case 2: {
        this.updateTutorial(1);
        document.getElementById("statesMap-2").style.opacity = "0";
        document.getElementById("human-placeholder-image").style.height =
          this.zoomHeight + "px";

        document.getElementById("human-placeholder-image").style.transform =
          "translate(" +
          this.bodyAreaCoords[this.bodyArea].x +
          "px, " +
          this.bodyAreaCoords[this.bodyArea].y +
          "px)";
        document.getElementById("human-placeholder").style.opacity = "1";
        this.layer = 0;
        document.getElementById("human-placeholder-image").className =
          "transition-on";

        setTimeout(() => {
          document.getElementById("human-placeholder-image").style.height = "";
          document.getElementById("human-placeholder-image").style.transform =
            "";
          let step1Text: any = document.getElementById("step-1").firstChild;
          step1Text.innerText = "Klicke auf ein Körperbereich";
          setTimeout(() => {
            this.layer = 1;
            document.getElementById("human-placeholder-image").className = "";
            document.getElementById("human-placeholder").style.opacity = "0";
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
