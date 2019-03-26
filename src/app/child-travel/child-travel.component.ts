import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child-travel',
  templateUrl: './child-travel.component.html',
  styleUrls: ['./child-travel.component.css']
})
export class ChildTravelComponent implements OnInit {
  @Input() travelData;
  @Output() onAction = new EventEmitter<any>();
  showDestination(){
    this.onAction.emit(this.travelData);
  }

  constructor() { }

  ngOnInit() {
  }

}
