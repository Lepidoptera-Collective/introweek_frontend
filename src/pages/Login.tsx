import React from 'react';

import { Container, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import LayoutLanding from 'layout/LayoutLanding';
import LoginForm from 'components/forms/Login';
import { AccountService, AuthService } from 'services';

type LoginFormProps = React.ComponentProps<typeof LoginForm>;

const Login = () => {
  const history = useHistory();

  const handleSubmit: LoginFormProps['onSubmit'] = async (values, { setSubmitting }) => {
    try {
      const data = await AccountService.login(values.email, values.password);

      setSubmitting(false);

      AuthService.setToken(data.token);
      history.push('/');
    } catch (err) {
      setSubmitting(false);
      // TODO: Error handling
      console.error(err);
    }
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
