import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LandingComponent } from "./landing/landing.component";
import { SymptomizeComponent } from "./symptomize/symptomize.component";

const routes: Routes = [
  { path: "", component: LandingComponent },
  {
    path: "symp",
    component: SymptomizeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
