import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-quittung',
  templateUrl: './quittung.component.html',
  styleUrls: ['./quittung.component.scss']
})
export class QuittungComponent implements OnInit {



  symptome=  [
  { id: 1, koerperteil: "Hand", Symptom: ["Bluten", "Blau"]},
  { id: 2, koerperteil: "Kopf", Symptom: ["Schnitt", "Blau"]}
  ];

  constructor(private router:Router) {

   }

  ngOnInit() {
  }

  clickPlus(){
    this.router.navigate(['/symp']);
  }
  clickEdit(){

  }
}
