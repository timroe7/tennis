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

  constructor() { }

  ngOnInit() {
  }

  incrementPoint1 () {
    debugger;
    this.match.Team1Point();
    this.match.AllSets[0].Team1Point;
  }
  incrementPoint2() {
    this.match.Team2Point();
  }
  resetButton() {
    this.match = new Match();
  }

}