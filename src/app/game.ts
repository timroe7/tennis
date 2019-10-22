export class Game {
  AllPoints = new Array<boolean>();
  Team1Points = 0;
  Team1PointsDisplay = '0';
  Team1TiebreakScore = 0;
  Team2Points = 0;
  Team2PointsDisplay = '0';
  Team2TiebreakScore = 0;
  WithAd = true;
  isFinished = false;
  gameWonBy = false;
  IsTiebreak = false;

  public Team1Point()  {
    if (!this.isFinished) {
    this.Team1PointsDisplay = this.UpdatePointsDisplay(this.Team1PointsDisplay, this.Team2PointsDisplay);
      this.AllPoints.push(true);
    }
    if (this.isFinished) {
      this.gameWonBy = true;
    }
  }
  public Team2Point() {
    if (!this.isFinished) {
    this.Team2PointsDisplay = this.UpdatePointsDisplay(this.Team2PointsDisplay, this.Team1PointsDisplay);
      this.AllPoints.push(false);
    }
    if (this.isFinished) {
      this.gameWonBy = false;
    }
  }

  public UpdatePointsDisplay(teamPointWon: string, teamPointLost: string): string {
    if (teamPointWon == '0') {
      return '15';
    }
    else if (teamPointWon == '15') {
      return '30';
    }
    else if (teamPointWon == '30') {
      return '40';
    }
    else if (teamPointWon == '40' && (teamPointLost == '30' || teamPointLost == '15' || teamPointLost == '0')) {
      this.isFinished = true;
      this.Team1PointsDisplay = '0';
      this.Team2PointsDisplay = '0';
      return '0';
    }
    else if (teamPointWon == '40' && teamPointLost == '40') {
      return 'Adv';
    }
    else if (teamPointWon == '40' && teamPointLost == 'Adv') {
      this.Team1PointsDisplay = '40';
      this.Team2PointsDisplay = '40';
      return '40';
    }
    else if (teamPointWon == 'Adv') {
      this.isFinished = true;
      this.Team1PointsDisplay = '0';
      this.Team2PointsDisplay = '0';
      return '0';
    }
  }
}