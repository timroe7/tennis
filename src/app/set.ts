import { Game } from "./game";

export class Set {
  WhichSet = 0;
  AllGames = new Array<Game>();
  CurrentGame = new Game();
  Team1Games = 0;
  Team2Games = 0;
  NumberOfGamesToWinSet = 6;
  PlayTiebreakAt = 6;
  IsSetFinished = false;
  SetWonBy = false;
  IsInTieBreak = false;

  Team1Point() {
    if (this.IsInTieBreak) {
      this.CurrentGame.TiebreakTeam1Point();
    } else {
      this.CurrentGame.Team1Point();
    }
      if (this.CurrentGame.isFinished) {
        this.AllGames.push(this.CurrentGame);
        if (this.CurrentGame.gameWonBy == true) {
          this.Team1Games++;
        } else {
          this.Team2Games++;
        }
        this.CurrentGame = new Game();
      }
      this.CheckForSetFinished();
      this.AreWeInTiebreak();
  }
  Team2Point() {
    if (this.IsInTieBreak) {
      this.CurrentGame.TiebreakTeam2Point();
    } else {
      this.CurrentGame.Team2Point();
    }
      if (this.CurrentGame.isFinished) {
        this.AllGames.push(this.CurrentGame);
        if (this.CurrentGame.gameWonBy == true) {
          this.Team1Games++;
        } else {
          this.Team2Games++;
        }
        this.CurrentGame = new Game();
      }
      this.CheckForSetFinished();
      this.AreWeInTiebreak();
  }
  CheckForSetFinished() {
    if ((this.Team1Games >= 6 && this.Team2Games <= 4) || this.Team1Games == 7) {
      this.IsSetFinished = true;
      this.SetWonBy = true;
    } else if ((this.Team2Games >= 6 && this.Team1Games <= 4) || this.Team2Games == 7) {
      this.IsSetFinished = true;
      this.SetWonBy = false;
    }
  }
  AreWeInTiebreak() {
    if (
      this.Team1Games == this.NumberOfGamesToWinSet &&
      this.Team2Games == this.NumberOfGamesToWinSet
    ) {
      this.IsInTieBreak = true;
    }
  }
}
