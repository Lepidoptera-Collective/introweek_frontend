import React from 'react';

import Cookie from 'js-cookie';
import { Route, RouteProps, Redirect } from 'react-router-dom';

import AuthService, { TOKEN_STORAGE_KEY } from 'services/auth';

interface PrivateRouteProps extends RouteProps {
  component?: any;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, children, ...rest }) => {
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
