import { ImpressumComponent } from './impressum/impressum.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LandingComponent } from "./landing/landing.component";
import { SymptomizeComponent } from "./symptomize/symptomize.component";
import { QuittungComponent } from './quittung/quittung.component';

const routes: Routes = [
  { path: "", component: LandingComponent },
  {
    path: "symp",
    component: SymptomizeComponent
  },
  {
    path: "quittung",
    component: QuittungComponent
  },
  {
    path: "impressum",
    component: ImpressumComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
