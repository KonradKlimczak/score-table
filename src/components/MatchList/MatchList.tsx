import React, { FC } from 'react';
import { List, ListItem, Divider, ListSubheader } from '@material-ui/core';
import { Match } from '../Match/Match';

export const MatchList: FC = props => {
  return (
    <List subheader={<ListSubheader component='div'>Lista meczow</ListSubheader>}>
      <ListItem>
        <Match />
      </ListItem>
      <Divider component='li' />
      <ListItem>Konrad 2 - 0 Kamil</ListItem>
      <Divider component='li' />
      <ListItem>Konrad 2 - 0 Kamil</ListItem>
    </List>
  );
};
