import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Router, RouterLink } from "@angular/router";
import { Location } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Local } from "protractor/built/driverProviders";
import { SymptomService } from "../symptom.service";

@Component({
  selector: "app-quittung",
  templateUrl: "./quittung.component.html",
  styleUrls: ["./quittung.component.scss"],
})
export class QuittungComponent implements OnInit {
  public URLoutput;
  public urlLabeltext1 =
    "Hier wird der Link erscheinen, wenn sie auf absenden clicken";
  public urlLabeltext2;
  public showcopy = false;
  public dictionary;

  symptoms = [];

  constructor(
    private router: Router,
    private location: Location,
    private http: HttpClient,
    private symptomService: SymptomService
  ) {
    this.symptoms = this.symptomService.profile;
    this.dictionary = this.symptomService.dictionary;
  }

  ngOnInit() {
    console.log(this.symptomService.profile);
  }

  clickPlus() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      this.router.navigate(["/profil/erfassen-m"]);
    } else {
      this.router.navigate(["/profil/erfassen"]);
    }
  }
  clickDelete(kt: string) {
    console.log(kt);
    if (confirm("Willst du " + kt + " wirklich löschen?")) {
      const index = this.symptoms.findIndex((obj) => obj.bodyPart === kt);
      console.log("index" + index);
      this.symptoms.splice(index, 1);
      console.log(this.symptoms);

      if (this.symptoms.length === 0) {
        alert("Es sind keine Körperteile ausgewählt");
        if (
          /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
          )
        ) {
          this.router.navigate(["/profil/erfassen-m"]);
        } else {
          this.router.navigate(["/profil/erfassen"]);
        }
      }
    }
  }
  absenden() {
    const url = "/saveProfil";
    if (confirm("Bist du sicher, dass du dein Profil absenden willst?")) {
      this.http
        .post<Observable<Text>>(url, {
          symptoms: this.symptoms,
        })
        .subscribe((output) => {
          this.URLoutput = output;
          console.log(this.URLoutput);
          this.giveURL(this.URLoutput);
          document.getElementById("text").style.minWidth = "165px";

          this.showcopy = true;
          document.getElementById("absenden-button").className = "done";
        });
    }
  }
  clickCopy(val: string) {
    const selBox = document.createElement("textarea");
    selBox.style.position = "fixed";
    selBox.style.left = "0";
    selBox.style.top = "0";
    selBox.style.opacity = "0";
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand("copy");
    document.body.removeChild(selBox);
  }
  goBack() {
    this.location.back();
    // this.router.navigate(["/profil/erfassen-m"]);
  }
  giveURL(url: Text) {
    this.urlLabeltext1 = "https://symptomize-app.herokuapp.com";
    this.urlLabeltext2 = "/profile/" + url;
  }
}
