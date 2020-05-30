import React from 'react';

import Container from '@material-ui/core/Container';

import LayoutLanding from 'layout/LayoutLanding';
import LoginForm from 'components/forms/Login';
import AuthService from 'services/auth';
import { useHistory, Link } from 'react-router-dom';
import { Typography, Button, Box } from '@material-ui/core';

type LoginFormProps = React.ComponentProps<typeof LoginForm>;

const Landingpage = () => {
  const history = useHistory();

  return (
    <LayoutLanding>
      <Container maxWidth="sm">
        <Typography variant="h2" align="center">
          Introweek Haarlem
        </Typography>
        <Typography variant="h4" align="center">
          ONLINE
        </Typography>
      </Container>
      <Box display="flex" alignItems="center" justifyContent="center">
        <Link to="/register">
          <Button variant="contained" color="secondary" size="large">
            Registreer meteen!
          </Button>
        </Link>
      </Box>
    </LayoutLanding>
  );
};

export default Landingpage;
