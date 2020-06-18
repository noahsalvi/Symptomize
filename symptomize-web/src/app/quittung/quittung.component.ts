import { Console } from 'console';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-quittung',
  templateUrl: './quittung.component.html',
  styleUrls: ['./quittung.component.scss']
})
export class QuittungComponent implements OnInit {

  public URLoutput;


  symptome =  [
  { id: 1, koerperteil: 'Hand', Symptom: ['Bluten', 'Blau']},
  { id: 2, koerperteil: 'Kopf', Symptom: ['Schnitt', 'Blau']}
  ];

  constructor(private router: Router, private location: Location, private http: HttpClient) {

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
  absenden() {
    const url = 'http://localhost:8080/saveProfil';
    this.http.post<Observable<Text>>(url, {
      params: {
        Symptome: this.symptome,
      },
      responseType: 'text',
    })
    .subscribe((output) => {
      this.URLoutput = output;
      console.log(this.URLoutput);
    });
  }
  goBack() {
    alert('back');
    this.location.back();
  }

}
