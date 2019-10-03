export class Game {
  AllPoints: Array<boolean>;
  Team1Points: number;
  Team2Points: number;
  WithAd: boolean;

  incrementTeam1Points() {
    this.Team1Points++;
    this.AllPoints.push(true);
  }
  incrementTeam2Points() {
    this.Team1Points++;
    this.AllPoints.push(false);
  }

}