import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import Layout from 'layout/Layout';

const Account = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path}>
        <Layout>
          <Container maxWidth="sm">
            <Box my={4}>
              <Typography variant="h4" component="h1" gutterBottom>
                Mijn Account
              </Typography>
            </Box>
          </Container>
        </Layout>
      </Route>
      <Route path={`${path}/voorkeuren`}>
        <Layout>
          <Container maxWidth="sm">
            <Box my={4}>
              <Typography variant="h4" component="h1" gutterBottom>
                Mijn Voorkeuren
              </Typography>
            </Box>
          </Container>
        </Layout>
        <Typography variant="h5" component="h2" gutterBottom></Typography>
      </Route>
    </Switch>
  );
};

export default Account;
