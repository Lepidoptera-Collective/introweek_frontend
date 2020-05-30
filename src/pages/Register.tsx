import React from 'react';

import Container from '@material-ui/core/Container';

import LayoutLanding from 'layout/LayoutLanding';
import RegisterForm from 'components/forms/Register';
import AuthService from 'services/auth';
import { useHistory } from 'react-router-dom';
import { Typography } from '@material-ui/core';

type RegisterFormProps = React.ComponentProps<typeof RegisterForm>;

const Register = () => {
  const history = useHistory();
  const handleSubmit: RegisterFormProps['onSubmit'] = (values, { setSubmitting }) => {
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
      <Container>
        <Typography variant="h2" align="center">
          Introweek Haarlem
        </Typography>
        <Typography variant="h4" align="center">
          ONLINE
        </Typography>
      </Container>
      <Container maxWidth="sm">
        <RegisterForm onSubmit={handleSubmit} />
      </Container>
    </LayoutLanding>
  );
};

export default Register;
