export interface IPlayer {
  id: string;
  name: string;
}

export interface IScore {
  playerOne: IPlayer;
  scoreOne: number;
  playerTwo: IPlayer;
  scoreTwo: number;
}

export interface Season {
  scores: IScore[];
  startDate: Date;
  endDate: Date;
}
