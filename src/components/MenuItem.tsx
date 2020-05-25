import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Collapse from '@material-ui/core/Collapse';

import IconExpandLess from '@material-ui/icons/ExpandLess';
import IconExpandMore from '@material-ui/icons/ExpandMore';

import ListItem from 'components/ListItem';

interface Item {
  name: string;
  link?: string;
  icon?: React.ComponentType;
  onClick?: () => void;
}

export type Props = Item & {
  items?: Item[];
};

const useStyles = makeStyles((theme) =>
  createStyles({
    menuItem: {
      '&.active': {
        background: 'rgba(0, 0, 0, 0.08)',
        '& .MuiListItemIcon-root': {
          color: theme.palette.text.primary,
        },
      },
    },
    menuItemIcon: {
      color: theme.palette.text.primary,
    },
  })
);

const MenuItem: React.FC<Props> = ({ icon: Icon, items = [], link, name, onClick }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const classes = useStyles();

  const isExpandable = items && items.length > 0;

  const handleClick = React.useCallback(() => {
    if (isExpandable) {
      return setIsOpen((open) => !open);
    }

    if (onClick) {
      onClick();
    }
  }, [isExpandable, onClick]);

  const ItemRoot = (
    <ListItem name={name} className={classes.menuItem} link={link} onClick={handleClick}>
      {!!Icon && (
        <ListItemIcon className={classes.menuItemIcon}>
          <Icon />
        </ListItemIcon>
      )}
      <ListItemText primary={name} inset={!Icon} />
      {isExpandable && !isOpen && <IconExpandMore />}
      {isExpandable && isOpen && <IconExpandLess />}
    </ListItem>
  );

  const ItemChildren = isExpandable ? (
    <Collapse in={isOpen} timeout="auto" unmountOnExit>
      <Divider />
      <List component="div" disablePadding>
        {items.map((item, index) => (
          <MenuItem {...item} key={index} />
        ))}
      </List>
    </Collapse>
  ) : null;

  return (
    <React.Fragment>
      {ItemRoot}
      {ItemChildren}
    </React.Fragment>
  );
};

export default MenuItem;
