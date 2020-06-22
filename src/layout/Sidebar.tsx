import React from 'react';
import { createStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import CardMedia from '@material-ui/core/CardMedia';

import IconVideocam from '@material-ui/icons/Videocam';
import IconQuestionAnswer from '@material-ui/icons/QuestionAnswer';
import IconSchool from '@material-ui/icons/School';
import IconPeople from '@material-ui/icons/People';
import IconSchedule from '@material-ui/icons/Schedule';
import IconMenuBook from '@material-ui/icons/MenuBook';
import IconHelpOutline from '@material-ui/icons/HelpOutline';
import IconPersonOutline from '@material-ui/icons/PersonOutline';
import MenuItem from 'components/MenuItem';
import logo from '../assets/logos/Logo.png';
import { useHistory } from 'react-router-dom';
import { AuthService } from 'services';
import { DRAWER_WIDTH } from 'variables';

const useStyles = makeStyles((theme) =>
  createStyles({
    appMenu: {
      width: '100%',
    },
    drawerPaper: {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: DRAWER_WIDTH,
      paddingBottom: theme.spacing(4),
      background: theme.palette.background.paper,
      color: theme.palette.text.primary,
    },
    toolbar: theme.mixins.toolbar,
  })
);

type Props = {
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
};

const Sidebar: React.FC<Props> = ({ mobileOpen, handleDrawerToggle }) => {
  const theme = useTheme();
  const classes = useStyles();
  const history = useHistory();

  const appMenuItems = [
    {
      name: 'LiveStream',
      link: '/',
      icon: IconVideocam,
    },
    {
      name: 'Chats',
      link: '/chats',
      icon: IconQuestionAnswer,
    },
    {
      name: 'Mijn vereniging',
      link: '/vereniging',
      icon: IconSchool,
    },
    {
      name: 'Smoelenboek',
      link: '/smoelen-boek',
      icon: IconPeople,
    },
    {
      name: 'Programma',
      link: '/programma',
      icon: IconSchedule,
    },
    {
      name: 'Pentagon',
      link: '/pentagon',
      icon: IconMenuBook,
    },
    {
      name: 'F.A.Q.',
      link: '/faq',
      icon: IconHelpOutline,
    },
    {
      name: 'Account',
      icon: IconPersonOutline,
      items: [
        {
          name: 'Mijn gegevens',
          link: '/account',
        },
        {
          name: 'Voorkeuren',
          link: '/account/voorkeuren',
        },
        {
          name: 'Uitloggen',
          onClick: () => {
            AuthService.removeToken();
            history.push('/login');
          },
        },
      ],
    },
  ];

  const drawer = (
    <React.Fragment>
      <CardMedia component="img" alt="Logo" height="200" image={logo} title="Logo" />
      <Divider />
      <List component="nav" className={classes.appMenu} disablePadding>
        {appMenuItems.map((item, index) => (
          <MenuItem {...item} key={index} />
        ))}
      </List>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <Hidden smUp>
        <Drawer
          variant="temporary"
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true,
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden xsDown>
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
    </React.Fragment>
  );
};

export default Sidebar;
