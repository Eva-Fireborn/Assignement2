import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TrafficLightComponent } from './traffic-light/traffic-light.component';
import { ParentTravelComponent } from './parent-travel/parent-travel.component';
import { ChildTravelComponent } from './child-travel/child-travel.component';
import { CommentsComponent } from './comments/comments.component';
import { CommentsService } from './comments.service';
import { AppRoutingModule } from './app-routing.module'

@NgModule({
  declarations: [
    AppComponent,
    TrafficLightComponent,
    ParentTravelComponent,
    ChildTravelComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [CommentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
