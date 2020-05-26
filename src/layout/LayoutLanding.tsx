import React from 'react';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { AppBar, Box } from '@material-ui/core';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import logo from '../assets/logos/Logo.png';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      height: '100%',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    content: {
      height: '100%',
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    toolbar: theme.mixins.toolbar,
  })
);

const LayoutLanding: React.FC = ({ children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const classes = useStyles();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className={classes.root}>
      {isMobile && (
        <AppBar position="fixed" color="primary">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open menu"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Introweek
            </Typography>
          </Toolbar>
        </AppBar>
      )}
      <Box display="flex" flexDirection="row" height="100%" width="100%">
        <Box flex={1} display="flex" flexDirection="row" justifyContent="center">
          <div style={{ backgroundColor: '#662d92', height: '100%', flex: 1 / 6 }} />
          <div style={{ backgroundColor: '#f25927', height: '100%', flex: 1 / 6 }} />
          <div style={{ backgroundColor: '#20ade3', height: '100%', flex: 1 / 6 }} />
          <div style={{ backgroundColor: '#ec018d', height: '100%', flex: 1 / 6 }} />
          <div style={{ backgroundColor: '#17a945', height: '100%', flex: 1 / 6 }} />
          <div style={{ backgroundColor: '#ed1922', height: '100%', flex: 1 / 6 }} />
          <img
            style={{ width: '300px', height: '300px', position: 'absolute', alignSelf: 'center' }}
            src={logo}
            alt="introweek logo"
          />
        </Box>
        <Box flex={1} alignSelf="center" component="main">
          {isMobile && <div className={classes.toolbar} />}
          {children}
        </Box>
      </Box>
    </div>
  );
};

export default LayoutLanding;
