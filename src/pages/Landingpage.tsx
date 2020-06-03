import React from 'react';

import Container from '@material-ui/core/Container';

import LayoutLanding from 'layout/LayoutLanding';
import AuthService from 'services/auth';
import RegisterForm from 'components/forms/Register';
import { useHistory, Link } from 'react-router-dom';
import { Typography, Button, Box } from '@material-ui/core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faVideo, faGlassCheers } from '@fortawesome/free-solid-svg-icons';

type RegisterFormProps = React.ComponentProps<typeof RegisterForm>;

const Landingpage = () => {
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
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-evenly"
        width="80%"
        height="30vh"
      >
        <Box
          display="flex"
          flexDirection="row"
          alignItems="left"
          width="60%"
          justifyContent="space-between"
        >
          <FontAwesomeIcon icon={faUsers} size="2x" />
          <Box width="70%">
            <Typography variant="h5">Leer je schoolgenoten kennen</Typography>
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="left"
          width="60%"
          justifyContent="space-between"
        >
          <FontAwesomeIcon icon={faVideo} size="2x" />
          <Box width="70%">
            <Typography variant="h5">24/7 livestream vol activiteiten</Typography>
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="left"
          width="60%"
          justifyContent="space-between"
        >
          <FontAwesomeIcon icon={faGlassCheers} size="2x" />
          <Box width="70%">
            <Typography variant="h5">Ook online is het feest</Typography>
          </Box>
        </Box>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="space-evenly">
        <Typography variant="h4">Schrijf je hier meteen in voor de Online Introweek!</Typography>
        <Container maxWidth="sm">
          <RegisterForm onSubmit={handleSubmit} />
        </Container>
      </Box>
    </LayoutLanding>
  );
};

export default Landingpage;
