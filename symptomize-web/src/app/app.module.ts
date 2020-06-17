import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LandingComponent } from "./landing/landing.component";
import { SymptomizeComponent } from "./symptomize/symptomize.component";
import { QuittungComponent } from "./quittung/quittung.component";
import { MaphilightModule } from "ng-maphilight";

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    SymptomizeComponent,
    QuittungComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, MaphilightModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
