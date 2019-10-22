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
      if (this.CurrentSet.IsSetFinished) {
        this.WhichSet++;
        if (this.CurrentSet.SetWonBy) {
          this.Team1Sets++;
        } else {
          this.Team2Sets++;
        }
        this.CurrentSet = new Set();
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
