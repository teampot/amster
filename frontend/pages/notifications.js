// @flow
import '../src/bootstrap';
// --- Post bootstrap -----
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import gql from 'graphql-tag';


export const query = gql`
{
	me{id,firstName,lastName}
}
`;

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
}));

function Notifications() {

  return (
    <Typography variant="h4" gutterBottom>
    Notifications
    </Typography>  );
}

export default Notifications;
