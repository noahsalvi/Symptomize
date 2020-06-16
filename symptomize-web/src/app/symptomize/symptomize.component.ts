import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-symptomize",
  templateUrl: "./symptomize.component.html",
  styleUrls: ["./symptomize.component.scss"],
})
export class SymptomizeComponent implements OnInit {
  hdc;
  constructor() {}

  ngOnInit() {
    this.myInit();
  }
  // stores the device context of the canvas we use to draw the outlines
  // initialized in myInit, used in myHover and myLeave

  // shorthand func
  byId(e) {
    return document.getElementById(e);
  }

  // takes a string that contains coords eg - "227,307,261,309, 339,354, 328,371, 240,331"
  // draws a line from each co-ord pair to the next - assumes starting point needs to be repeated as ending point.
  drawPoly(coOrdStr) {
    let mCoords = coOrdStr.split(",");
    let i, n;
    n = mCoords.length;

    this.hdc.beginPath();
    this.hdc.moveTo(mCoords[0], mCoords[1]);
    for (i = 2; i < n; i += 2) {
      this.hdc.lineTo(mCoords[i], mCoords[i + 1]);
    }
    this.hdc.lineTo(mCoords[0], mCoords[1]);
    this.hdc.stroke();
  }

  drawRect(coOrdStr) {
    let mCoords = coOrdStr.split(",");
    let top, left, bot, right;
    left = mCoords[0];
    top = mCoords[1];
    right = mCoords[2];
    bot = mCoords[3];
    this.hdc.strokeRect(left, top, right - left, bot - top);
  }

  myHover(title) {
    let test: any[];
    let maps = document.getElementById("image-map").children;

    let element;
    for (let i = 0; i < maps.length; i++) {
      console;
      if (maps[i].getAttribute("title") == title) {
        console.log("yes");
        element = maps[i];
        console.log(maps[i]);
      }
    }
    let coordStr = element.getAttribute("coords");
    console.log(coordStr);
    let areaType = element.getAttribute("shape");

    switch (areaType) {
      case "polygon":
      case "poly":
        this.drawPoly(coordStr);
        break;

      case "rect":
        this.drawRect(coordStr);
    }
  }

  myLeave() {
    let canvas: any = this.byId("myCanvas");
    this.hdc.clearRect(0, 0, canvas.width, canvas.height);
  }

  myInit() {
    // get the target image
    let img = this.byId("human");

    let x, y, w, h;

    // get it's position and width+height
    x = img.offsetLeft;
    y = img.offsetTop;
    w = img.clientWidth;
    h = img.clientHeight;

    // move the canvas, so it's contained by the same parent as the image
    let imgParent = img.parentNode;
    let can: any = this.byId("myCanvas");
    imgParent.appendChild(can);

    // place the canvas in front of the image
    can.style.zIndex = 1;

    // position it over the image
    can.style.left = x + "px";
    can.style.top = y + "px";

    // make same size as the image
    can.setAttribute("width", w + "px");
    can.setAttribute("height", h + "px");

    // get it's context
    this.hdc = can.getContext("2d");

    // set the 'default' values for the colour/width of fill/stroke operations
    this.hdc.fillStyle = "red";
    this.hdc.strokeStyle = "red";
    this.hdc.lineWidth = 2;
  }
}
