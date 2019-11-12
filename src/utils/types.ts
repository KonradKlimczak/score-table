export interface IPlayer {
  id: string;
  name: string;
}

export interface IMatch {
  playerOne: IPlayer;
  scoreOne: number;
  playerTwo: IPlayer;
  scoreTwo: number;
}

export interface IMeetingSummary {
  playerOne: IPlayer;
  oneMatchesWon: number;
  playerTwo: IPlayer;
  twoMatchesWon: number;
}

export enum MeetingKind {
  Match = "Match",
  Summary = "Summary"
}

export interface IMatchMeeting {
  kind: MeetingKind.Match;
  matches: IMatch[];
}

export interface ISummaryMeeting {
  kind: MeetingKind.Summary;
  summary: IMeetingSummary;
}

export type IMeeting = IMatchMeeting | ISummaryMeeting;

export interface ISeason {
  meetings: IMeeting[];
  startDate: Date;
  endDate: Date;
}
