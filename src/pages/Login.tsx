import React from 'react';

import Container from '@material-ui/core/Container';

import LayoutLanding from 'layout/LayoutLanding';
import LoginForm from 'components/forms/Login';
import AuthService from 'services/auth';
import { useHistory } from 'react-router-dom';
import { Typography } from '@material-ui/core';

type LoginFormProps = React.ComponentProps<typeof LoginForm>;

const Login = () => {
  const history = useHistory();
  const handleSubmit: LoginFormProps['onSubmit'] = (values, { setSubmitting }) => {
    setTimeout(() => {
      setSubmitting(false);
      // !!! Fake token for testing.
      AuthService.storeToken(
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAc3Rlc3QuY29tIiwiZXhwIjoxNTkwNDIyMTk0Njg5LCJpYXQiOjE1MTYyMzkwMjJ9.uTHUr3uoVW5liyHtam5to6z_wAlGlzs22Gn8kz8MOZ0'
      );

      history.push('/');
    }, 500);
  };

  return (
    <LayoutLanding>
      <Container maxWidth="sm">
        <Typography variant="subtitle1">
          Geen echte api call nog, kan gewoon fake data zijn
        </Typography>
        <LoginForm onSubmit={handleSubmit} />
      </Container>
    </LayoutLanding>
  );
};

export default Login;
