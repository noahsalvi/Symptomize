import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-quittung',
  templateUrl: './quittung.component.html',
  styleUrls: ['./quittung.component.scss']
})
export class QuittungComponent implements OnInit {



  symptome =  [
  { id: 1, koerperteil: 'Hand', Symptom: ['Bluten', 'Blau']},
  { id: 2, koerperteil: 'Kopf', Symptom: ['Schnitt', 'Blau']}
  ];

  constructor(private router: Router, private location: Location) {

   }

  ngOnInit() {
  }

  clickPlus(){
    this.router.navigate(['/symp']);
  }
  clickEdit(id: number) {
    alert(id);
  }
  clickDelete(id: number) {
    alert(id);
  }
  goBack() {
    alert('back');
    this.location.back();
  }
}
