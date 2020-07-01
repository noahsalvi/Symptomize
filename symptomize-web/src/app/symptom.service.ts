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
  bodyCoords = {
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
    "right-hand": {
      x: 160,
      y: -40,
    },
    "right-forearm": {
      x: 150,
      y: 50,
    },
    "right-upper-arm": {
      x: 130,
      y: 180,
    },
    "right-shoulder": {
      x: 120,
      y: 260,
    },
    "right-elbow": {
      x: 140,
      y: 100,
    },
    "left-hand": {
      x: -160,
      y: -40,
    },
    "left-forearm": {
      x: -130,
      y: 50,
    },
    "left-upper-arm": {
      x: -110,
      y: 180,
    },
    "left-shoulder": {
      x: -100,
      y: 260,
    },
    "left-elbow": {
      x: -100,
      y: 100,
    },
    "left-foot": {
      x: -100,
      y: -450
    },
    "left-shin": {
      x: -100,
      y: -300
    },
    "left-knee": {
      x: -90,
      y: -200
    },
    "left-thigh": {
      x: -70,
      y: -100
    },
    "right-foot": {
      x: 100,
      y: -450
    },
    "right-shin": {
      x: 100,
      y: -300
    },
    "right-knee": {
      x: 90,
      y: -200
    },
    "right-thigh": {
      x: 70,
      y: -100
    },
    "right-breast": {
      x: 30,
      y: 150
    },
    "left-breast": {
      x: -30,
      y: 150
    },
    neck: {
      x: 0,
      y: 250
    },
    "lower-ribs": {
      x: 0,
      y: 100
    },
    stomach: {
      x: 0,
      y: 20
    },
    "right-ear": {
      x: 30,
      y: 390
    },
    "left-ear": {
      x: -30,
      y: 390
    },
    nose: {
      x: 0,
      y: 390
    },
    "upper-head": {
      x: 0,
      y: 430
    },
    "left-eye": {
      x: -10,
      y: 390
    },
    "right-eye": {
      x: 10,
      y: 390
    },
    "right-cheek": {
      x: 10,
      y: 380
    },
    "left-cheek": {
      x: -10,
      y: 380
    },
    mouth: {
      x: 0,
      y: 380
    },
    jaw: {
      x: 0,
      y: 370
    },
  };
  constructor() {}
}
