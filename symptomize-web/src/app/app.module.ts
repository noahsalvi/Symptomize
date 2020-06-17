import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LandingComponent } from "./landing/landing.component";
import { SymptomizeComponent } from "./symptomize/symptomize.component";
import { QuittungComponent } from "./quittung/quittung.component";
import { MaphilightModule } from "ng-maphilight";
import { ImpressumComponent } from "./impressum/impressum.component";
import { ProfilComponent } from "./profil/profil.component";

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    SymptomizeComponent,
    QuittungComponent,
    QuittungComponent,
    ImpressumComponent,
    ProfilComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, MaphilightModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
