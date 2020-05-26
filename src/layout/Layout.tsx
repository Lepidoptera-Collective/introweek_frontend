import React from 'react';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { AppBar } from '@material-ui/core';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import Sidebar from './Sidebar';

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

const Layout: React.FC = ({ children }) => {
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
      <Sidebar handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen} />
      <main className={classes.content}>
        {isMobile && <div className={classes.toolbar} />}
        {children}
      </main>
    </div>
  );
};

export default Layout;
