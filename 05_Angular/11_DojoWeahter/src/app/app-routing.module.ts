import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SeattleComponent } from './seattle/seattle.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { BurbankComponent } from './burbank/burbank.component';
import { DallasComponent } from './dallas/dallas.component';
import { DcComponent } from './dc/dc.component';
import { ChicagoComponent } from './chicago/chicago.component';

const routes: Routes = [
  {path: '', redirectTo: 'seattle', pathMatch: 'full'},
  {path: 'seattle', component: SeattleComponent },
  {path: 'burbank', component: BurbankComponent },
  {path: 'chicago', component: ChicagoComponent },
  {path: 'dallas', component: DallasComponent },
  {path: 'dc', component: DcComponent },
  {path: 'sanJose', component: SanjoseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
