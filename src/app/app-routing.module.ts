import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import{ ParentTravelComponent } from './parent-travel/parent-travel.component';
import { TrafficLightComponent } from './traffic-light/traffic-light.component';


const routes: Routes = [
	{ path: 'Resor', component: ParentTravelComponent },
	{ path: 'Trafikljus', component: TrafficLightComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
