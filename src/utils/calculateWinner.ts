import {
  ISeason,
  IPlayer,
  IMeeting,
  MeetingKind,
  ISummaryMeeting,
  IMatchMeeting,
  IMeetingSummary
} from "./types";
import { assertNever } from "./assertNever";

export interface IPlayerSummary {
  player: IPlayer;
  seasonsWon: number;
}

export interface ISeasonCardProps {
  winner: IPlayerSummary;
  looser: IPlayerSummary;
}

const getPlayers = (meeting: IMeeting) => {
  switch (meeting.kind) {
    case MeetingKind.Match:
      return {
        playerOne: meeting.matches[0].playerOne,
        playerTwo: meeting.matches[0].playerTwo
      };
    case MeetingKind.Summary:
      return {
        playerOne: meeting.summary.playerOne,
        playerTwo: meeting.summary.playerTwo
      };

    default:
      return assertNever(meeting);
  }
};

interface IMeetingPlayerSummery {
  player: IPlayer;
  matchesWon: number;
}

const getMatchMeetingSummary = (meeting: IMatchMeeting): IMeetingSummary => {
  return meeting.matches.reduce(
    (meetingSummary: IMeetingSummary, match) => {
      if (match.scoreOne > match.scoreTwo) {
        return {
          ...meetingSummary,
          oneMatchesWon: meetingSummary.oneMatchesWon + 1
        };
      } else if (match.scoreOne < match.scoreTwo) {
        return {
          ...meetingSummary,
          twoMatchesWon: meetingSummary.oneMatchesWon + 1
        };
      }
      return meetingSummary;
    },
    {
      playerOne: meeting.matches[0].playerOne,
      playerTwo: meeting.matches[0].playerTwo,
      oneMatchesWon: 0,
      twoMatchesWon: 0
    }
  );
};

const getMeetingSummary = (meeting: IMeeting): IMeetingSummary => {
  switch (meeting.kind) {
    case MeetingKind.Match:
      return getMatchMeetingSummary(meeting);
    case MeetingKind.Summary:
      return meeting.summary;

    default:
      return assertNever(meeting);
  }
};

export const calculateWinner = (seasons: ISeason[]) => {
  let { playerOne, playerTwo } = getPlayers(seasons[0].meetings[0]);
  const seasonsSummary: ISeasonCardProps = {
    winner: {
      player: playerOne,
      seasonsWon: 0
    },
    looser: {
      player: playerTwo,
      seasonsWon: 0
    }
  };

  for (const season of seasons) {
  }
};
