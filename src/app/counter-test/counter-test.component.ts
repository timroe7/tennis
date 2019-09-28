import { Component, OnInit } from '@angular/core';
import {Game} from '../game';
import {Player} from '../player';
@Component({
  selector: 'app-counter-test',
  templateUrl: './counter-test.component.html',
  styleUrls: ['./counter-test.component.css']
})
export class CounterTestComponent implements OnInit {
  game: Game;
  player1: Player = {
  id: 1,
  name: '',
  sets: 0,
  score: 0,
  isWinner: false};
  player2: Player = {
  id: 2,
  name: '',
  sets: 0,
  score: 0,
  isWinner: false};
  constructor() {
   }

  ngOnInit() {
  }

}