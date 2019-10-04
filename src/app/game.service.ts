import { Injectable } from '@angular/core';
import {Game} from './game';
import {Match} from './match';
import {Player} from './player';
import {Set} from './set';
@Injectable()
export class GameService {
  games: Game[] = [
    {AllPoints: [],
  Team1Points: 0,
  Team1PointsDisplay: "0",
  Team2Points: 0,
  Team2PointsDisplay: "0",
  WithAd: true,
  isFinished: false,
  gameWonBy: true,
  isTrue: true
   }
  ];
  //match: Match
  constructor() { }

  getCurrentGame(): Game {
    for (let g of this.games) {
      if (!g.isFinished) return g;
    }
  }
  incrementTeam1Points(game: Game) {
    if (!this.IsGameFinished(game)) {
      game.IncreaseTeam1Point();
      game.AllPoints.push(true);
    } 
  }
  incrementTeam2Points(game: Game) {
    if (!this.IsGameFinished(game)) {
      game.Team2Points++;
      game.AllPoints.push(false);
    } 
  }

  IsGameFinished(game: Game): boolean {
    if (Math.abs(game.Team1Points-game.Team2Points)>=2 
    &&(game.Team1Points >=4 || game.Team2Points>=4)) {
      if (game.Team1Points > game.Team2Points) {
        game.gameWonBy = true;
        return true;
      }
      else {
        game.gameWonBy = false;
        return true;
      }
    }
     else return false;
  }
}