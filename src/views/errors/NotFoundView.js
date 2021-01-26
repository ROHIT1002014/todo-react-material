import React from 'react';
import {
  Box,
  Container,
  Typography,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  // root: {
  //   backgroundColor: theme.palette.background.dark,
  //   height: '100%',
  //   paddingBottom: theme.spacing(3),
  //   paddingTop: theme.spacing(3)
  // },
}));

const NotFoundView = () => {
  const classes = useStyles();

  return (
    <Box
      display="flex"
      flexDirection="column"
      height="100%"
      justifyContent="center"
    >
      <Container maxWidth="md">
        <Typography
          align="center"
          color="textPrimary"
          variant="h1"
        >
          404: The page you are looking for isn’t here
        </Typography>
        <Typography
          align="center"
          color="textPrimary"
          variant="subtitle2"
        >
          You either tried some shady route or you came here by mistake.
          Whichever it is, try using the navigation
        </Typography>
      </Container>
    </Box>
  );
};

export default NotFoundView;
