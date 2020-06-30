import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class SymptomService {
  profile = [];
  dictionary = {
    head: "Kopf",
    "right-arm": "Rechter Arm",
    "right-leg": "Rechtes Bein",
    "left-leg": "Linkes Bein",
    "left-arm": "Linker Arm",
    torso: "Oberkörper",
    hand: "Hand",
    elbow: "Ellbogen",
    forearm: "Unterarm",
    "upper-arm": "Oberarm",
  };
  constructor() {}
}
