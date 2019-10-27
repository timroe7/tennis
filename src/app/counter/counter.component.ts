import { Component, OnInit } from '@angular/core';
import {Game} from '../game';
import {Match} from '../match';
import {Set} from '../set';
import {GameService} from '../game.service'

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  match = new Match();
  currentTeam: boolean;
  constructor() { }

  ngOnInit() {
  }

  incrementPoint1 () {
    //debugger;
    this.currentTeam = true;
    this.match.Team1Point();
    //this.match.AllSets[0].Team1Point;
  }
  incrementPoint2() {
    this.currentTeam = false;
    this.match.Team2Point();
  }
  resetButton() {
    this.match = new Match();
  }

}