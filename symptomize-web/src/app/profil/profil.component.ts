import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Observable, throwError, observable } from 'rxjs';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  isDataAvailable = false;
  private ID = 1;
  // Ausgabe Test
  private Lol: any;
  public symptoms: any;

  private routeSub: Subscription;
  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    const url = 'http://localhost:8080/getProfil/';
    this.routeSub = this.route.params.subscribe(params => {
      this.http.get(url + params.id)
        .subscribe((output) => {
          this.Lol = output;
          this.symptoms = this.Lol.symptoms;
          console.log('output');
          console.log(this.symptoms);
          this.isDataAvailable = true;
        });
    });
  }
  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}
