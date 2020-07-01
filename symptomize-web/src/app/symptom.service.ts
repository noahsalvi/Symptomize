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
    "right-forearm": "Rechter Unterarm",
    "right-hand": "Rechte Hand",
    "right-elbow": "Rechter Ellbogen",
    "right-upper-arm": "Rechter Oberarm",
    "right-shoulder": "Rechte Schulter",

    "left-forearm": "Linker Unterarm",
    "left-hand": "Linke Hand",
    "left-elbow": "Linker Ellbogen",
    "left-upper-arm": "Linker Oberarm",
    "left-shoulder": "Linke Schulter",

    "right-ear": "Rechtes Ohr",
    "left-ear": "Linkes Ohr",
    nose: "Nase",
    "upper-head": "Oberkopf",
    "left-eye": "Linkes auge",
    "right-eye": "Rechtes Auge",
    "right-cheek": "Rechte Wange",
    "left-cheek": "Linke Wange",
    mouth: "Mund",
    jaw: "Kiefer",
    "left-foot": "Linker Fuss",
    "left-shin": "Linkes Schienbein",
    "left-knee": "Linkes Knie",
    "left-thigh": "Linker Oberschenkel",

    "right-foot": "Rechter Fuss",
    "right-shin": "Rechtes Schienbein",
    "right-knee": "Rechtes Knie",
    "right-thigh": "Rechter Oberschenkel",
    "right-breast": "Rechte Brust",
    "left-breast": "Linke Brust",
    neck: "Hals",
    "lower-ribs": "Untere Rippen",
    stomach: "Bauch",
  };
  constructor() {}
}
