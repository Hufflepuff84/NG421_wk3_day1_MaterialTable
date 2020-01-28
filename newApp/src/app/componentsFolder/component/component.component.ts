import { Component, OnInit } from '@angular/core';
import {Player} from '../../interfaces/player';
@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.scss']
})
export class ComponentComponent implements OnInit {

  constructor() { }
  PLAYER_DATA: Player[] = [
    {name: 'MichaelJordan', position: 'ShootingGuard', nationality: 'American', number: 23},
    {name: 'LarryBird', position: 'SmallForward', nationality: 'American', number: 33},
    {name: 'ShaquilleOneal', position: 'Center', nationality: 'American', number: 34},
    {name: 'DirkNowitzki', position: 'PowerForward', nationality: 'German', number: 41},
    {name: 'TonyParker', position: 'PointGuard', nationality: 'French', number: 9}
  ]
  ngOnInit() {
  }

}
