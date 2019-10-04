import { Injectable } from '@angular/core';
import {Game} from './game';
import {Match} from './match';
import {Player} from './player';
import {Set} from './set';
@Injectable()
export class GameService {
  games: Game[];
  //match: Match
  constructor() { }

  getCurrentGame(): Game {
    for (let g of this.games) {
      if (!g.isFinished) return g;
    }
  }
  incrementTeam1Points() {
    if (this.gameFinished()) {
      this.game.Team1Points++;
      this.game.AllPoints.push(true);
    } 
  }
  incrementTeam2Points() {
    if (this.gameFinished()) {
      this.Team1Points++;
      this.AllPoints.push(false);
    }
  }

  gameFinished(): boolean {
    if (Math.abs(this.Team1Points-this.Team2Points)>=2 
    &&(this.Team1Points >=4 || this.Team2Points>=4)) {
      if (this.Team1Points > this.Team2Points) {
        this.gameWonBy = true;
        return true;
      }
      else {
        this.gameWonBy = false;
        return true;
      }
    }
     else return false;
  }
}