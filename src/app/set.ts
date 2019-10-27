import { Game } from "./game";

export class Set {
  WhichSet = 0;
  WhichPlayerServing = true;
  AllGames = new Array<Game>();
  CurrentGame = new Game();
  Team1Games = 0;
  Team2Games = 0;
  NumberOfGamesToWinSet = 6;
  PlayTiebreakAt = 6;
  IsSetFinished = false;
  SetWonBy = false;
  IsInTieBreak = false;

  changePlayerServing() {
    if (this.WhichPlayerServing) this.WhichPlayerServing = false;
    else this.WhichPlayerServing = true;
  }
  Team1Point() {
    if (this.IsInTieBreak) {
      this.CurrentGame.TiebreakTeam1Point();
      if ((this.CurrentGame.Team1TiebreakScore + this.CurrentGame.Team2TiebreakScore) % 2 != 0) {
        this.changePlayerServing();
      }
    } else {
      this.CurrentGame.Team1Point();
    }
      if (this.CurrentGame.isFinished) {
        this.AllGames.push(this.CurrentGame);
        if (this.CurrentGame.gameWonBy == true) {
          this.Team1Games++;
          this.changePlayerServing();
        } else {
          this.Team2Games++;
          this.changePlayerServing();
        }
        if (!this.CurrentGame.IsInTieBreak) {
        this.CurrentGame = new Game();
        this.CurrentGame.WhoIsServing = this.WhichPlayerServing;
        }

      }
      this.CheckForSetFinished();
      this.AreWeInTiebreak();
  }
  Team2Point() {
    if (this.IsInTieBreak) {
      this.CurrentGame.TiebreakTeam2Point();
      if ((this.CurrentGame.Team1TiebreakScore + this.CurrentGame.Team2TiebreakScore) % 2 != 0) {
        this.changePlayerServing();
      }
    } else {
      this.CurrentGame.Team2Point();
    }
      if (this.CurrentGame.isFinished) {
        this.AllGames.push(this.CurrentGame);
        if (this.CurrentGame.gameWonBy == true) {
          this.Team1Games++;
           this.changePlayerServing();
        } else {
          this.Team2Games++;
           this.changePlayerServing();
        }
        if (!this.CurrentGame.IsInTieBreak) {
        this.CurrentGame = new Game();
        this.CurrentGame.WhoIsServing = this.WhichPlayerServing;
        }
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
