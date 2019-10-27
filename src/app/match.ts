import { Set } from "./set";
import { Game } from "./game";

export class Match {
  AllSets = [new Set(), new Set(), new Set()];
  CurrentSet = new Set();
  WhichSet = 0;
  Team1Sets = 0;
  Team2Sets = 0;
  NumberOfsetsToWinMatch = 2;
  IsMatchFinished = false;
  MatchWonBy = false;

  Team1Point() {
    if (!this.IsMatchFinished) {
      this.CurrentSet.Team1Point();
      this.AllSets[this.WhichSet] = this.CurrentSet;
      //if (this.AllSets[this.WhichSet].Current)
      if (this.CurrentSet.IsSetFinished) {
        this.WhichSet++;
        if (this.CurrentSet.SetWonBy) {
          this.Team1Sets++;
        } else {
          this.Team2Sets++;
        }        
        debugger;
        this.CurrentSet = new Set();
        if (!this.AllSets[this.WhichSet-1].WhichPlayerServing && !this.AllSets[this.WhichSet-1].CurrentGame.IsTiebreak) {
          this.CurrentSet.WhichPlayerServing = false;
        }
        else if (this.AllSets[this.WhichSet-1].WhichPlayerServing && !this.AllSets[this.WhichSet-1].CurrentGame.IsTiebreak) {
          this.CurrentSet.WhichPlayerServing = true;
        }
        else if (this.AllSets[this.WhichSet-1].CurrentGame.IsTiebreak) {
          if (this.AllSets[this.WhichSet-1].AllGames[0].WhoIsServing) {
            this.CurrentSet.WhichPlayerServing = false;
          }
          else {
            this.CurrentSet.WhichPlayerServing = true;
          }
        }
        
      }
    }
    this.CheckForMatchFinished();
  }
  Team2Point() {
    if (!this.IsMatchFinished) {
      this.CurrentSet.Team2Point();
      this.AllSets[this.WhichSet] = this.CurrentSet;
      if (this.CurrentSet.IsSetFinished) {
        this.WhichSet++;
        if (this.CurrentSet.SetWonBy) {
          this.Team1Sets++;
        } else {
          this.Team2Sets++;
        }
        this.CurrentSet = new Set();
        if (this.AllSets[this.WhichSet-1].WhichPlayerServing && !this.AllSets[this.WhichSet-1].CurrentGame.IsTiebreak) {
          this.CurrentSet.WhichPlayerServing = false;
        }
        else if (!this.AllSets[this.WhichSet-1].WhichPlayerServing && !this.AllSets[this.WhichSet-1].CurrentGame.IsTiebreak) {
          this.CurrentSet.WhichPlayerServing = true;
        }
        else if (this.AllSets[this.WhichSet-1].CurrentGame.IsTiebreak) {
          if (this.AllSets[this.WhichSet-1].AllGames[0].WhoIsServing) {
            this.CurrentSet.WhichPlayerServing = false;
          }
          else {
            this.CurrentSet.WhichPlayerServing = true;
          }
        }
      }
    }
    this.CheckForMatchFinished();
  }
  CheckForMatchFinished() {
    if (this.Team1Sets == this.NumberOfsetsToWinMatch) {
      this.IsMatchFinished = true;
      this.MatchWonBy = true;
    }
    else if (this.Team2Sets == this.NumberOfsetsToWinMatch) {
      this.IsMatchFinished = true;
      this.MatchWonBy = false;
    }
  }
}
