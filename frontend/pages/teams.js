import '../src/bootstrap';
// --- Post bootstrap -----
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import gql from 'graphql-tag';
import { Grid, Card, CardHeader, Avatar, IconButton, CardContent, Typography, CardActions } from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';
import MessageIcon from '@material-ui/icons/Message';
import CreateIcon from '@material-ui/icons/Create';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AvTimerIcon from '@material-ui/icons/AvTimer';
import Group from '@material-ui/icons/Group';
export const query = gql`
{
	me{id,firstName,lastName}
}
`;

const useStyles = makeStyles( () => ( {
  root: {

  },
  card: {
    margin:5
  },
  subHeader: {

  }
} ) );

function Teams ()
{
  const classes = useStyles();
  const teams = [
    {
      id: 10,
      name: 'Teampot team',
      header: '.NET Software Engineering',
      availableIn: '1 months',
      location: 'London',
      members:[{},{}]
    },{
      id: 11,
      name: '418 I\'m a teapot',
      header: 'Java AWS Software Engineering',
      availableIn: '6 months',
      location: 'London',
      members:[{},{},{}]
    } ];

  return (
    <Grid
      className={ classes.root }
      container
      direction="row"
      justify="flex-start"
      alignItems="baseline">
      { teams.map( team =>
      {
        return (
          <Grid item xs={ 12 } key={ team.id }>
            <Card className={ classes.card }>
              <CardHeader
                avatar={
                  <Avatar aria-label="Recipe">
                    R
                </Avatar>
                }
                action={
                  <CardActions disableActionSpacing>
                    <IconButton aria-label="Edit">
                      <CreateIcon />
                    </IconButton>
                    <IconButton aria-label="Share">
                      <ShareIcon />
                    </IconButton>
                    <IconButton aria-label="Message">
                      <MessageIcon />
                    </IconButton>
                  </CardActions>
                }
                title={ `${team.name} - ${team.header}` }
                subheader={
                  <Grid direction="row"
                        justify="flex-start"
                        alignItems="center"
                        container 
                        className={classes.subHeader}>
                        <Grid item container xs={12} sm={6} md={4}  key={ team.id }>
                          <LocationOnIcon/> <Typography > {team.location} </Typography>
                        </Grid>
                        <Grid item container xs={12} sm={6} md={4} key={ team.id }>
                          <AvTimerIcon/> <Typography > {`available in ${team.availableIn}`}  </Typography>
                        </Grid>
                        <Grid item container xs={12} sm={6} md={4} key={ team.id }>
                          <Group/> <Typography > {`${team.members.length} members`}  </Typography>
                        </Grid>
                  </Grid>
                  // <CardActions disableActionSpacing>
                  //   <IconButton aria-label="Edit">
                  //     <CreateIcon />
                  //   </IconButton>
                  //   <IconButton aria-label="Share">
                  //     <ShareIcon />
                  //   </IconButton>
                  //   <IconButton aria-label="Message">
                  //     <MessageIcon />
                  //   </IconButton>
                  // </CardActions>
                }
              />
              <CardContent>
                <Typography component="p">
                  This impressive paella is a perfect party dish and a fun meal to cook together with your
                  guests. Add 1 cup of frozen peas along with the mussels, if you like.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      } ) }
    </Grid>
  );
}

export default Teams;
