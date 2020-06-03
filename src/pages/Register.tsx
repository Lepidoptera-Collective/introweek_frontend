import React from 'react';

import Container from '@material-ui/core/Container';

import LayoutLanding from 'layout/LayoutLanding';
import RegisterForm from 'components/forms/Register';
import AuthService from 'services/auth';
import { useHistory } from 'react-router-dom';
import { Typography, Box } from '@material-ui/core';
import { positions } from '@material-ui/system';

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
      <Box
        position="absolute"
        top="3vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="50%"
      >
        <Container maxWidth="sm">
          <Typography variant="h2" align="center">
            Introweek Haarlem
          </Typography>
          <Typography variant="h4" align="center">
            ONLINE
          </Typography>
        </Container>
      </Box>
      <Container maxWidth="sm">
        <Typography variant="body1" align="center">
          Laat hier je emailadres achter om je in te schrijven voor de Online Introweek van Haarlem!
        </Typography>
        <RegisterForm onSubmit={handleSubmit} />
      </Container>
    </LayoutLanding>
  );
};

export default Register;
