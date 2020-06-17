import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  // Ausgabe Test
  symptome =  [
    { id: 1, koerperteil: 'Hand', Symptom: ['Bluten', 'Blau']},
    { id: 2, koerperteil: 'Kopf', Symptom: ['Schnitt', 'Blau']}
    ];

  private routeSub: Subscription;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
    });
  }
  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}
