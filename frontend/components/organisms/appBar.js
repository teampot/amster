// @flow
import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { fade } from '@material-ui/core/styles/colorManipulator';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PowerSettingsNew from '@material-ui/icons/PowerSettingsNew'
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import Group from '@material-ui/icons/Group';
import GroupWork from '@material-ui/icons/GroupWork';
import Info from '@material-ui/icons/Info';
import { withRouter } from 'next/router';
import getPageContext from '../../src/getPageContext';
import ActionHome from '../atoms/ActionHome'

const useStyles = makeStyles( theme => ( {
  root: {
    width: '100%',
  },
  home: {
    marginRight: 15,
    [ theme.breakpoints.down( 'xs' ) ]: {
      marginLeft: -20,
    },
  },
  grow: {
    flexGrow: 1,
  },
  button: {
    margin: theme.spacing.unit,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [ theme.breakpoints.up( 'sm' ) ]: {
      display: 'block',
    }
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade( theme.palette.common.white, 0.15 ),
    '&:hover': {
      backgroundColor: fade( theme.palette.common.white, 0.25 ),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [ theme.breakpoints.up( 'sm' ) ]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create( 'width' ),
    width: '100%',
    [ theme.breakpoints.up( 'md' ) ]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [ theme.breakpoints.up( 'md' ) ]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [ theme.breakpoints.up( 'md' ) ]: {
      display: 'none',
    },
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
} ) );



function PrimarySearchAppBar ({user, router})
{
  const pageContext = getPageContext();
  const classes = useStyles();
  const [ anchorEl, setAnchorEl ] = React.useState( null );
  const [ mobileMoreAnchorEl, setMobileMoreAnchorEl ] = React.useState( null );
  const [ authUser, setAuthUser ] = React.useState( null );

  const [ leftDrawer, setLeftDrawer ] = React.useState( null );

  const isMenuOpen = Boolean( anchorEl );
  const isMobileMenuOpen = Boolean( mobileMoreAnchorEl );
  const isLeftDrawerOpen = Boolean( leftDrawer );

  function handleProfileMenuOpen ( event )
  {
    setAnchorEl( event.currentTarget );
  }

  function handleMobileMenuClose ( route )
  {
    setMobileMoreAnchorEl( null );
    if ( typeof ( route ) === 'string' ) router.push( route );
  }

  function handleMenuClose ( route )
  {
    setAnchorEl( null );
    handleMobileMenuClose( route );
  }

  function handleMobileMenuOpen ( event )
  {
    setMobileMoreAnchorEl( event.currentTarget );
  }

  const toggleDrawer = () => () =>
  {
    setLeftDrawer( !isLeftDrawerOpen );
  };

  // Similar to componentDidMount and componentDidUpdate:
  useEffect( () =>
  {
    router.prefetch( '/teams' );
    router.prefetch( '/jobs' );
    router.prefetch( '/job' );
    router.prefetch( '/teams' );
    router.prefetch( '/team' );
    router.prefetch( '/about' );
    router.prefetch( '/profile' );
    router.prefetch( '/messages' );
    router.prefetch( '/notifications' );
  }, [ false ] );

  const sideList = (
    <div className={ classes.list }>
      <List>
        <ListItem onClick={ () => setTimeout( () => { router.push( '/teams' ) }, 0 ) }>
          <ListItemIcon><Group /></ListItemIcon>
          <ListItemText primary={ 'Teams' } />
        </ListItem>
        <ListItem onClick={ () => setTimeout( () => { router.push( '/jobs' ) }, 0 ) }>
          <ListItemIcon><GroupWork /></ListItemIcon>
          <ListItemText primary={ 'Jobs' } />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem onClick={ () => setTimeout( () => { router.push( '/about' ) }, 0 ) }>
          <ListItemIcon><Info /></ListItemIcon>
          <ListItemText primary={ 'About' } />
        </ListItem>
      </List>
    </div>
  );

  const renderMenu = (
    <Menu
      anchorEl={ anchorEl }
      anchorOrigin={ { vertical: 'top', horizontal: 'right' } }
      transformOrigin={ { vertical: 'top', horizontal: 'right' } }
      open={ isMenuOpen }
      onClose={ handleMenuClose }
    >
      <MenuItem onClick={ () => setTimeout( () => { handleMenuClose( '/profile' ) }, 0 ) }>Profile</MenuItem>
      <MenuItem onClick={ () => setTimeout( () => { handleMenuClose( '/teams' ) }, 0 ) }>Log out</MenuItem>
    </Menu>
  );

  const renderMobileMenu = (
    <Menu
      anchorEl={ mobileMoreAnchorEl }
      anchorOrigin={ { vertical: 'top', horizontal: 'right' } }
      transformOrigin={ { vertical: 'top', horizontal: 'right' } }
      open={ isMobileMenuOpen }
      onClose={ handleMobileMenuClose }
    >
      <MenuItem onClick={ ( e ) => setTimeout( () => { handleMenuClose( '/profile' ) }, 0 ) }>
        <IconButton color="inherit">
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
      <MenuItem onClick={ () => setTimeout( () => { handleMenuClose( '/messages' ) }, 0 ) }>
        <IconButton color="inherit">
          <Badge badgeContent={ 4 } color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem onClick={ () => setTimeout( () => { handleMenuClose( '/notifications' ) }, 0 ) }>
        <IconButton color="inherit">
          <Badge badgeContent={ 11 } color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <Hidden mdUp>
        <MenuItem onClick={ () => setTimeout( () => { handleMenuClose( "/teams" ) }, 0 ) }>
          <IconButton color="inherit">
            <PowerSettingsNew />
          </IconButton>
          <p>Logout</p>
        </MenuItem>
      </Hidden>
    </Menu>
  );

  return (
    <div className={ classes.root }>
      <AppBar position="static">
        <Toolbar>
          <Hidden smUp>
            <IconButton onClick={ toggleDrawer() } className={ classes.menuButton } color="inherit" aria-label="Open drawer">
              <MenuIcon />
            </IconButton>
          </Hidden>
          <div className={ classes.home }>
            <ActionHome />
          </div>
          <Typography className={ classes.title } variant="h6" color="inherit" noWrap>
            Teampot
          </Typography>
          <div className={ classes.search }>
            <div className={ classes.searchIcon }>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={ {
                root: classes.inputRoot,
                input: classes.inputInput,
              } }
            />
          </div>
          <Hidden xsDown>
            <Button color="inherit" onClick={ () => setTimeout( () => { router.push( '/teams' ) }, 0 ) }>Teams</Button>
            <Button color="inherit" onClick={ () => setTimeout( () => { router.push( '/jobs' ) }, 0 ) }>Jobs</Button>
            <Button color="inherit" onClick={ () => setTimeout( () => { router.push( '/about' ) }, 0 ) }>About</Button>
          </Hidden>
          <div className={ classes.grow } />
          { authUser ? 
            <div className={ classes.sectionDesktop }>
              <IconButton onClick={ () => setTimeout( () => { router.push( '/messages' ) }, 0 ) } color="inherit">
                <Badge badgeContent={ 4 } color="secondary">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton onClick={ () => setTimeout( () => { router.push( '/notifications' ) }, 0 ) } color="inherit">
                <Badge badgeContent={ 17 } color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                aria-owns={ isMenuOpen ? 'material-appbar' : undefined }
                aria-haspopup="true"
                onClick={ handleProfileMenuOpen }
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
            :
            <Button color="inherit" onClick={ () => setTimeout( () => { setAuthUser({}) }, 0 ) }>Login</Button>
          }
          { authUser &&
            <div className={ classes.sectionMobile }>
              <IconButton aria-haspopup="true" onClick={ handleMobileMenuOpen } color="inherit">
                <MoreIcon />
              </IconButton>
            </div>
          }
        </Toolbar>
      </AppBar>
      <Drawer open={ isLeftDrawerOpen } onClose={ toggleDrawer() }>
        <div tabIndex={ 0 } role="button" onClick={ toggleDrawer() } onKeyDown={ toggleDrawer() }>
          { sideList }
        </div>
      </Drawer>
      <Hidden xsDown>
        { renderMenu }
      </Hidden>      
      {renderMobileMenu }
    </div>
  );
}

export default withRouter( PrimarySearchAppBar );
