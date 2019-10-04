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
  match: Match;
  game : Game;
  player1GameScore = 0;
  player1GameScoreDisplay = '0';
  player1CurrentSetScore = 0;
  player1Set1Display = 0;
  player1Set2Display = 0;
  player1Set3Display = 0;
  player1TiebreakScore = 0;
  player1SetsWon = 0;
  player2GameScore = 0;
  player2GameScoreDisplay = '0';
  player2CurrentSetScore = 0;
  player2Set1Display = 0;
  player2Set2Display = 0;
  player2Set3Display = 0;
  player2TiebreakScore = 0;
  player2SetsWon = 0;
  currentSet = 1;
  winnerText = '';

  

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.game = this.gameService.getCurrentGame();
  }

  incrementPoint1 () {
    debugger;
    this.gameService.incrementTeam1Points(this.game);
  }
}