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
  displayedColumns: string[] = ['id','name', 'position', 'nationality', 'number'];
  
 dataSource;
 PLAYER_DATA: Player[] = [
  {id: 1,  name: 'Michael Jordan',  position: 'Shooting Guard', nationality: 'American',   number: 23},
  {id: 2,  name: 'Larry Bird',      position: 'Small Forward',  nationality: 'American',   number: 33},
  {id: 3,  name: 'Shaquille Oneal', position: 'Center',         nationality: 'American',   number: 34},
  {id: 4,  name: 'Dirk Nowitzki',   position: 'Power Forward',  nationality: 'German',     number: 41},
  {id: 5,  name: 'Tony Parker',     position: 'Point Guard',    nationality: 'French',     number: 9},
  {id: 6,  name: 'Hakeem Olajuwon', position: 'Center',         nationality: 'Nigerian',   number: 34},
  {id: 7,  name: 'Shawn Kemp',      position: 'Power Forward',  nationality: 'American',   number: 40},
  {id: 8,  name: 'Penny Hardaway',  position: 'Point Guard',    nationality: 'American',   number: 1},
  {id: 9,  name: 'Detlef Schrempf', position: 'Small Forward',  nationality: 'German',     number: 11},
  {id: 10, name: 'Magic Johnson',   position: 'Point Guard',    nationality: 'American',   number: 32},
  {id: 11, name: 'Rony Seikaly',    position: 'Center',         nationality: 'Lebanese',   number: 4},
  {id: 12, name: 'Vlade Divac',     position: 'Center',         nationality: 'Serbian',   number: 12},

];
ngOnInit(){

  this.dataSource = this.PLAYER_DATA;
  console.log(this.dataSource);
}
  


}

