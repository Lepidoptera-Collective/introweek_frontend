import React from 'react';

import { Route as DomRoute, RouteProps, Redirect } from 'react-router-dom';

import { AuthService } from 'services';

interface Props extends RouteProps {
  component?: any;
  isProtected?: boolean;
  isPublic?: boolean;
}

const Route: React.FC<Props> = ({
  component: Component,
  children,
  isProtected = false,
  isPublic = false,
  ...rest
}) => {
  return (
    <DomRoute {...rest}>
      {(props) => {
        /**
         * If not logged in and trying to access a protected route, route to login
         * If logged in and trying to access a "public" only route, route to home
         */
        if (!AuthService.isValid && isProtected) {
          return (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: props.location },
              }}
            />
          );
        }

        if (AuthService.isValid && isPublic) {
          return (
            <Redirect
              to={{
                pathname: '/',
                state: { from: props.location },
              }}
            />
          );
        }

        if (children) {
          return children;
        }

        return <Component {...props} {...rest} />;
      }}
    </DomRoute>
  );
};

export default Route;
