import { HttpClientModule } from "@angular/common/http";
import { ProfilComponent } from "./profil/profil.component";
import { ImpressumComponent } from "./impressum/impressum.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LandingComponent } from "./landing/landing.component";
import { SymptomizeComponent } from "./symptomize/symptomize.component";
import { QuittungComponent } from "./quittung/quittung.component";
import { SymptomizeMobileComponent } from "./symptomize-mobile/symptomize-mobile.component";

const routes: Routes = [
  { path: "", component: LandingComponent },
  {
    path: "profil/erfassen",
    component: SymptomizeComponent,
  },
  {
    path: "profil/erfassen-m",
    component: SymptomizeMobileComponent,
  },
  {
    path: "profil",
    component: QuittungComponent,
  },
  {
    path: "impressum",
    component: ImpressumComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
