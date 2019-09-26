export class Game {
  Player1Points: number;
  Player2Points: number;
  IsTiebreak: boolean;
  Player1Won: boolean;
  Player2Won: boolean;

  IncreasePlayer1Points() {
    this.Player1Points++;
  }
  IncreasePlayer2Points() {
    this.Player1Points++;
  }
  Player1Wins(): boolean {
     return true;
  }
  Player2Wins() {
    this.Player2Won = true;
  }
  }