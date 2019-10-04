export class Game {
  AllPoints: Array<boolean>;
  Team1Points: number;
  Team1PointsDisplay: string;
  Team2Points: number;
  Team2PointsDisplay: string;
  WithAd: boolean;
  isFinished: boolean;
  gameWonBy: boolean;

  public IncreaseTeam1Point()  {
    if (!this.isFinished) {
      this.Team1Points++;
      this.AllPoints.push(true);
    }
    this.UpdatePointsDisplay1();
  }
  public Team2Point() {
    if (!this.isFinished) {
      this.Team2Points++;
      this.AllPoints.push(false);
    }
    this.UpdatePointsDisplay2();
  }
  public UpdatePointsDisplay1() {
    if (this.Team1Points > 3 && (this.Team2Points >= 3 && this.Team2Points < this.Team1Points)) {
      this.Team1PointsDisplay = 'Adv';
    }
    else if (this.Team1Points >= 3 && this.Team2Points == this.Team1Points) {
      this.Team1PointsDisplay = '40';
    }
    else if (this.Team1Points >= 3 && this.Team1Points == (this.Team2Points-1)) {
      this.Team1PointsDisplay = '40';
    }
    else if (this.Team1Points == 1) {
      this.Team1PointsDisplay = '15';
    }
    else if (this.Team1Points == 2) {
      this.Team1PointsDisplay = '30';
    }
    else if (this.Team1Points == 3) {
      this.Team1PointsDisplay = '40';
    }
  }
  public UpdatePointsDisplay2() {
    if (this.Team2Points > 3 && (this.Team1Points >= 3 && this.Team1Points < this.Team2Points)) {
      this.Team2PointsDisplay = 'Adv';
    }
    else if (this.Team2Points >= 3 && this.Team1Points == this.Team2Points) {
      this.Team2PointsDisplay = '40';
    }
    else if (this.Team2Points >= 3 && this.Team2Points == (this.Team1Points-1)) {
      this.Team2PointsDisplay = '40';
    }
    else if (this.Team2Points == 1) {
      this.Team2PointsDisplay = '15';
    }
    else if (this.Team2Points == 2) {
      this.Team2PointsDisplay = '30';
    }
    else if (this.Team2Points == 3) {
      this.Team2PointsDisplay = '40';
    }
  }
}