import * as React from 'react';
import { Formik, Form, Field, FormikConfig } from 'formik';
import { Button, LinearProgress, useTheme } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { TextField } from 'formik-material-ui';

interface Values {
  email: string;
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

  return (
    <Formik
      initialValues={{
        email: '',
      }}
      validate={(values) => {
        const errors: Partial<Values> = {};
        if (!values.email) {
          errors.email = 'Verplicht';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = 'Ongeldig email adres';
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
          {isSubmitting && <LinearProgress color="secondary" />}
          <br />
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            disabled={isSubmitting}
            onClick={submitForm}
          >
            Registreer
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
