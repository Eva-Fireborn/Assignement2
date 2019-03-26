import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-travel',
  templateUrl: './parent-travel.component.html',
  styleUrls: ['./parent-travel.component.css'],
})
export class ParentTravelComponent implements OnInit {
  selectedTravel: object = {};
  travelData: TravelData [] = [
    {
      destination:  'Narnia',
      information: 'Varierande klimat och härlig natur bjuder Narnia på. Riket styrs av Aslan, ett lejon som gillar att leka med barn. ',
      picture: "assets/img/narnia.jpg",
      transportation: 'Genom en garderob'
    },
    {
      destination: 'Underlandet',
      information: 'Vår guide till underlandet är en vit kanin. Väl där kan man njuta av té, kortspel, vattenpipa och de grönskande trädgårdarna.',
      picture: "assets/img/underlandet.JPG",
      transportation: 'Genom ett kaninhål',
    },
    {
      destination: 'Landet ingenstans',
      information: 'Resan till landet Ingenstans är speciellt, då vi själva flyger ledda av en 11-årig guide. Väl framme kan se både krokodiler och sjöjungfruar. OBS! Man inte blir äldre under resan, lämpligt för pensionärer!',
      picture: "assets/img/ingenstans.jpg",
      transportation: 'Friflyg'
    }
  ];

  handleAction($event){
    if (this.selectedTravel === $event){
      this.selectedTravel = {};
    } else {
      this.selectedTravel = $event
    }
  }
  

  constructor() { }

  ngOnInit() {
  }

}
interface TravelData {
  destination: string,
  information: string,
  picture: string,
  transportation: string
}