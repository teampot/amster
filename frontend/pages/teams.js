import '../src/bootstrap';
// --- Post bootstrap -----
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import gql from 'graphql-tag';
import { Grid, Card, CardHeader, Avatar, IconButton, CardContent, Typography, CardActions, Chip } from '@material-ui/core';
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
    margin: 5
  },
  tag: {
    margin: 5
  },
  subHeaderIcon: {
    marginRight: 3
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
      description: 'Full Stack .NET Angular React Software Engineering team',
      availableIn: '1 months',
      location: 'Remote',
      members: [ {}, {} ],
      tags: [ {
        name: 'C#',
        score: 10
      }, {
        name: 'JavaScript',
        score: 10
      }, {
        name: 'Azure',
        score: 10
      }, {
        name: 'Scrum',
        score: 10
      }, {
        name: 'OOP',
        score: 10
      }, {
        name: 'SOLID',
        score: 10
      }, {
        name: 'JavaScript',
        score: 10
      }, {
        name: 'Azure',
        score: 10
      }, {
        name: 'Scrum',
        score: 10
      }, {
        name: 'OOP',
        score: 10
      }, {
        name: 'SOLID',
        score: 10
      } , {
        name: 'JavaScript',
        score: 10
      }, {
        name: 'Azure',
        score: 10
      }, {
        name: 'Scrum',
        score: 10
      }, {
        name: 'OOP',
        score: 10
      }, {
        name: 'SOLID',
        score: 10
      } , {
        name: 'JavaScript',
        score: 10
      }, {
        name: 'Azure',
        score: 10
      }, {
        name: 'Scrum',
        score: 10
      }, {
        name: 'OOP',
        score: 10
      }, {
        name: 'SOLID',
        score: 10
      }  ]

    }, {
      id: 11,
      name: '418 I\'m a teapot',
      header: 'Java AWS Software Engineering',
      availableIn: '6 months',
      location: 'London',
      description: 'Full Stack Node.js React Cross functional team',
      members: [ {}, {}, {} ],
      tags: [ {
        name: 'C#',
        score: 10
      }, {
        name: 'JavaScript',
        score: 10
      }, {
        name: 'Azure',
        score: 10
      }, {
        name: 'Scrum',
        score: 10
      }, {
        name: 'OOP',
        score: 10
      }, {
        name: 'SOLID',
        score: 10
      }, {
        name: 'AWS',
        score: 10
      }, {
        name: 'CSS',
        score: 10
      }, {
        name: 'React',
        score: 10
      }, {
        name: 'JavaScript',
        score: 10
      } ]
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
                title={ `${ team.name } - ${ team.header }` }
                subheader={
                  <Grid direction="row"
                    justify="flex-start"
                    alignItems="center"
                    container>
                    <Grid item container xs={ 12 } sm={ 4 } md={ 3 } key={ team.id }>
                      <LocationOnIcon className={ classes.subHeaderIcon } /> <Typography > { team.location } </Typography>
                    </Grid>
                    <Grid item container xs={ 12 } sm={ 4 } md={ 3 } key={ team.id }>
                      <AvTimerIcon className={ classes.subHeaderIcon } /> <Typography > { `in ${ team.availableIn }` }  </Typography>
                    </Grid>
                    <Grid item container xs={ 12 } sm={ 4 } md={ 3 } key={ team.id }>
                      <Group className={ classes.subHeaderIcon } /> <Typography > { `${ team.members.length } members` }  </Typography>
                    </Grid>
                  </Grid>
                }
              />
              <CardContent>
                <Typography component="p">
                  { team.description }
                </Typography>
                <Grid
                  className={ classes.root }
                  container
                  direction="row"
                  justify="flex-start"
                  alignItems="baseline">
                  { team.tags.map( tag =>
                  {
                    return ( <Chip
                      label={ tag.name }
                      variant="outlined"
                      className={ classes.tag }
                    /> );
                  } ) }
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        );
      } ) }
    </Grid>
  );
}

export default Teams;
