import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-impressum',
  templateUrl: './impressum.component.html',
  styleUrls: ['./impressum.component.scss']
})
export class ImpressumComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  openPDF() {
    window.open('assets/Benutzerhandbuch_Symptomize.pdf', '_blank');
  }

  goBack() {
    this.location.back();
  }
}
