import '../src/bootstrap';
// --- Post bootstrap -----
import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import Link from 'next/link';
import { Query } from 'react-apollo'
import gql from 'graphql-tag'


export const query = gql`
{
   books {
    title
    author
  }
}
`


const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
}));

function Index() {
  const classes = useStyles({});
  const [open, setState] = React.useState(false);

  const handleClose = () => {
    setState(false);
  };
  const handleClick = () => {
    setState(true);
  };

  return (
    <div className={classes.root}>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Super Secret Password</DialogTitle>
        <DialogContent>
          <DialogContentText>1-2-3-4-5</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={handleClose}>
            OK
          </Button>
        </DialogActions>
      </Dialog>
      <Typography variant="h4" gutterBottom>
        Material-UI
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        example project
      </Typography>
      <Typography gutterBottom>
        <Link href="/about">
          <a>Go to the about page</a>
        </Link>
      </Typography>
      <Button variant="contained" color="secondary" onClick={handleClick}>
        Super Secret Password
      </Button>
      <Query query={query}>
      {({ loading, error, data: { books } }) => {
        if (error) return <span>Error.</span>
        if (loading) return <div>Loading.</div>
        return (
          <section>
            <h1>Below books are rendered from apollo graphql:</h1>
            
            <ul>
              {books.map((book: any) => (
                <li>{book.title}</li>
              ))}
            </ul>
          </section>
        )
      }}
    </Query>     
    </div>
  );
}

export default Index;
