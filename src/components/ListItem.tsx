import React, { forwardRef } from 'react';
import ListItemCore from '@material-ui/core/ListItem';
import { NavLink, NavLinkProps } from 'react-router-dom';

export interface Props {
  className?: string;
  link?: string | null;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  name?: string;
}

const ListItem: React.FC<Props> = ({ className, onClick, link, children, name }) => {
  if (!link || typeof link !== 'string') {
    return (
      <ListItemCore
        aria-label={name}
        button
        className={className}
        children={children}
        onClick={onClick}
      />
    );
  }

  return (
    <ListItemCore
      aria-label={name}
      button
      className={className}
      children={children}
      component={forwardRef((props: NavLinkProps, ref: any) => (
        <NavLink exact {...props} innerRef={ref} />
      ))}
      to={link}
    />
  );
};

export default ListItem;
