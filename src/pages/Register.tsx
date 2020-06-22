import React from 'react';

import Container from '@material-ui/core/Container';
import { useHistory } from 'react-router-dom';

import LayoutLanding from 'layout/LayoutLanding';
import RegisterForm from 'components/forms/Register';
import { AccountService, AuthService } from 'services';

type RegisterFormProps = React.ComponentProps<typeof RegisterForm>;

const Register = () => {
  const history = useHistory();

  const handleSubmit: RegisterFormProps['onSubmit'] = async (values, { setSubmitting }) => {
    try {
      const data = await AccountService.register(values.email, 'password', 'study');

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
        <RegisterForm onSubmit={handleSubmit} />
      </Container>
    </LayoutLanding>
  );
};

export default Register;
