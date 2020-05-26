import * as React from 'react';
import { Formik, Form, Field, FormikConfig } from 'formik';
import { Button, LinearProgress, useTheme } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import { TextField } from 'formik-material-ui';

interface Values {
  email: string;
  password: string;
}
const useStyles = makeStyles((theme) =>
  createStyles({
    field: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
    button: {
      marginTop: theme.spacing(2),
    },
  })
);

interface Props {
  onSubmit: FormikConfig<Values>['onSubmit'];
}

const LoginForm = ({ onSubmit }: Props) => {
  const classes = useStyles();
  const theme = useTheme();
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validate={(values) => {
        const errors: Partial<Values> = {};
        if (!values.email) {
          errors.email = 'Verplicht';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = 'Ongeldig email adres';
        }

        if (!values.password) {
          errors.password = 'Verplicht';
        } else if (values.password.length < 6) {
          errors.password = 'Wachtwoord niet sterk genoeg, minstens 6 karakters';
        }

        return errors;
      }}
      onSubmit={onSubmit}
    >
      {({ submitForm, isSubmitting }) => (
        <Form>
          <Field
            color="secondary"
            component={TextField}
            fullWidth
            label="E-mail"
            name="email"
            style={{ marginTop: theme.spacing(2), marginBottom: theme.spacing(1) }}
            type="email"
            variant="outlined"
          />
          <br />
          <Field
            color="secondary"
            component={TextField}
            fullWidth
            helperText="Minstens 6 karakters"
            label="Wachtwoord"
            name="password"
            style={{ marginTop: theme.spacing(1), marginBottom: theme.spacing(2) }}
            variant="outlined"
            type={showPassword ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          {isSubmitting && <LinearProgress color="secondary" />}
          <br />
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            disabled={isSubmitting}
            onClick={submitForm}
          >
            Inloggen
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
