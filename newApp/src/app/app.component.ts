import { Component, OnInit } from '@angular/core';
import { ɵPLATFORM_BROWSER_ID } from '@angular/common';
import {Player}from '../app/interfaces/player'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  title = 'newApp';
  displayedColumns: string[] = ['name', 'position', 'nationality', 'number'];
  

// we don't these here because of the preceding code
 // name: string;
 // position: string;
 // nationality: string;
 dataSource;
 PLAYER_DATA: Player[] = [
  {name: 'MichaelJordan', position: 'ShootingGuard', nationality: 'American', number: 23},
  {name: 'LarryBird', position: 'SmallForward', nationality: 'American', number: 33},
  {name: 'ShaquilleOneal', position: 'Center', nationality: 'American', number: 34},
  {name: 'DirkNowitzki', position: 'PowerForward', nationality: 'German', number: 41},
  {name: 'TonyParker', position: 'PointGuard', nationality: 'French', number: 9}
];
ngOnInit(){

  this.dataSource = this.PLAYER_DATA;
  console.log(this.dataSource);
}
  


}

