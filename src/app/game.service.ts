import { Injectable } from '@angular/core';
import {}
@Injectable()
export class GameService {

  constructor() { }

  incrementTeam1Points() {
    if (this.gameFinished()) {
      this.Team1Points++;
      this.AllPoints.push(true);
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