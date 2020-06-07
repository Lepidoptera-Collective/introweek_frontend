import React, { useState } from 'react';

import Container from '@material-ui/core/Container';

import LayoutLanding from 'layout/LayoutLanding';
import AuthService from 'services/auth';
import RegisterForm from 'components/forms/Register';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import { useHistory, Link } from 'react-router-dom';
import { Typography, Button, Box } from '@material-ui/core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faVideo, faGlassCheers } from '@fortawesome/free-solid-svg-icons';

import { CSSTransition } from 'react-transition-group';

import introbox from '../assets/logos/Introbox-png.png';
import { NONAME } from 'dns';

import '../theme/Landingpage.css';

type RegisterFormProps = React.ComponentProps<typeof RegisterForm>;

const Landingpage = () => {
  const [boxVisible, setBoxVisible] = useState(true);
  const [contentsVisible, setContentsVisible] = useState(false);

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
      <Box display="flex" flexDirection="column" height="100%" width="100%">
        <Box display="flex" flexDirection="column" flex="0.5 0.5 0" width="100%">
          <Typography variant="h2" align="center">
            Introweek Haarlem
          </Typography>
          <Typography variant="h4" align="center">
            Registratie
          </Typography>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-evenly"
          flex="1 1 0"
        >
          <Container maxWidth="sm">
            <RegisterForm onSubmit={handleSubmit} />
          </Container>
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-evenly"
          flex="2 2 0"
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="space-around"
          >
            <FontAwesomeIcon icon={faVideo} size="2x" />
            <Typography variant="h6" align="center">
              Livestreams
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="space-around"
          >
            <FontAwesomeIcon icon={faGlassCheers} size="2x" />
            <Typography variant="h6" align="center">
              Activiteiten
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="space-around"
          >
            <FontAwesomeIcon icon={faUsers} size="2x" />
            <Typography variant="h6" align="center">
              Gezelligheid
            </Typography>
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          flex="3 3 0"
          justifyContent="space-evenly"
        >
          <Typography variant="h4" align="center">
            What's in the box???
          </Typography>
          <Box
            display="flex"
            justifyContent="space-around"
            height="30vh"
            width="60%"
            border="solid 2px #5D5D5D"
            borderRadius="20px"
          >
            {boxVisible && (
              <img className="boxImage" src={introbox} onClick={() => setContentsVisible(true)} />
            )}

            <CSSTransition
              in={contentsVisible}
              timeout={300}
              classNames="contents"
              unmountOnExit
              onEnter={() => setBoxVisible(false)}
              onExit={() => setBoxVisible(true)}
            >
              <Box
                height="30vh"
                flexDirection="column"
                display="flex"
                justifyContent="space-around"
                alignItems="center"
              >
                <Typography variant="h6" align="center">
                  [COMING SOON]
                </Typography>
                <Typography variant="h5" align="center">
                  Dé Introbox, gevuld met de leukste goodies!
                </Typography>
              </Box>
            </CSSTransition>
          </Box>
        </Box>
      </Box>
    </LayoutLanding>

    /*<LayoutLanding>
      <Box display="flex" alignItems="center" justifyContent="center">
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
        <Typography variant="h4" align="center">
          Schrijf je hier meteen in voor de Online Introweek!
        </Typography>
        <Container maxWidth="sm">
          <RegisterForm onSubmit={handleSubmit} />
        </Container>
      </Box>
    </LayoutLanding>*/
  );
};

export default Landingpage;
