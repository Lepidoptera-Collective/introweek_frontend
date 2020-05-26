import React from 'react';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ReactPlayer from 'react-player';
import TextField from '@material-ui/core/TextField';

import Layout from 'layout/Layout';
import useDebounce from 'utils/use-debounce';
import useWindowSize from 'utils/use-window-size';
import { DRAWER_WIDTH } from 'variables';
import { useMediaQuery, useTheme } from '@material-ui/core';

const LiveStream = () => {
  const [channel, setChannel] = React.useState('');
  const debouncedChannel = useDebounce(channel, 2000);
  const windowSize = useWindowSize();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  const [size, setSize] = React.useState({ height: 0, width: 0 });

  React.useEffect(() => {
    if (windowSize.width && windowSize.height) {
      const pad = theme.spacing(3) * 2;
      const drawerWidth = isMobile ? 0 : DRAWER_WIDTH;
      const width = windowSize.width - drawerWidth - pad;
      const height = width * (9 / 16);
      const unusedVar = height;

      setSize({
        height,
        width,
      });
    }
  }, [isMobile, theme, windowSize]);

  return (
    <Layout>
      <Box display="flex" flexDirection="column" my={4}>
        <Box display="flex" justifyContent="space-between" mb={2}>
          <Typography variant="h4" component="h1" gutterBottom>
            LiveStream
          </Typography>
          <TextField
            color="secondary"
            id="search-channels"
            label="Channel name"
            variant="outlined"
            onChange={(event) => setChannel(event.target.value)}
          />
        </Box>
        {debouncedChannel ? (
          <Box alignSelf="center" mt={3}>
            <ReactPlayer
              url={`https://www.twitch.tv/${debouncedChannel}`}
              muted
              playing
              {...size}
            />
          </Box>
        ) : (
          <Typography variant="body1" align="center">
            Vul een valide kanaal naam in.
          </Typography>
        )}
      </Box>
    </Layout>
  );
};

export default LiveStream;
