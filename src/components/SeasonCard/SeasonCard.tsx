import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import GradeIcon from '@material-ui/icons/Grade';
import React, { FC } from 'react';
import { IPlayer } from '../../utils/types';

const useStyles = makeStyles({
  card: {
    minWidth: 275
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export interface IPlayerSummary {
  player: IPlayer;
  seasonsWon: number;
}

export interface ISeasonCardProps {
  winner: IPlayerSummary;
  looser: IPlayerSummary;
}

export const SeasonCard: FC<ISeasonCardProps> = props => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color='textSecondary' gutterBottom>
          Podsumowanie sezonów
        </Typography>
        <Typography variant='h5' component='h2'>
          <GradeIcon />
          {props.winner.player.name} {props.winner.seasonsWon}
          <GradeIcon />
        </Typography>
        <Typography className={classes.pos} color='textSecondary'>
          {props.winner.player.name} {props.winner.seasonsWon} - {props.looser.seasonsWon} {props.looser.player.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>Learn More</Button>
      </CardActions>
    </Card>
  );
};
