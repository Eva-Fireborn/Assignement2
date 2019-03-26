import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-traffic-light',
  templateUrl: './traffic-light.component.html',
  styleUrls: ['./traffic-light.component.css']
})
export class TrafficLightComponent implements OnInit {

  index: number = 0;

  newIndex(){
    if (this.index === 3){
      this.index = 0;
    } else {
      this.index = this.index+1
    }
  }

  constructor() { }

  ngOnInit() {
  }
}
