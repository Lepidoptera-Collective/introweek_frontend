import React from 'react';

import Cookie from 'js-cookie';
import { Route, RouteProps, Redirect } from 'react-router-dom';

import AuthService, { TOKEN_STORAGE_KEY } from 'services/auth';

interface PrivateRouteProps extends RouteProps {
  component?: any;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, children, ...rest }) => {
  // !!! Fake token for testing.
  AuthService.storeToken(
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAc3Rlc3QuY29tIiwiZXhwIjoxNTkwNDIyMTk0Njg5LCJpYXQiOjE1MTYyMzkwMjJ9.uTHUr3uoVW5liyHtam5to6z_wAlGlzs22Gn8kz8MOZ0'
  );
  const token = Cookie.get(TOKEN_STORAGE_KEY);
  const auth = new AuthService(token);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (!auth.isValid) {
          return (
            <Redirect
              to={{
                pathname: '/login',
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
    />
  );
};

export default PrivateRoute;
