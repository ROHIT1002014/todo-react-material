import React, { useState } from 'react';
import {
  Box,
  Container,
  makeStyles,
} from '@material-ui/core';
import Page from '../../../components/Page';
import Results from './Results';
import Toolbar from './Toolbar';
import data from './data';
import NavBar from '../../../layouts/DashboardLayout/NavBar';
import TopBar from '../../../layouts/DashboardLayout/TopBar';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(2),
    width: '100%',
  },
  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 256,
    },
  },
  contentContainer: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
  },
  content: {
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto',
  },
}));

const CustomerListView = () => {
  const classes = useStyles();
  const [customers] = useState(data);
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className={classes.root}>
      <TopBar onMobileNavOpen={() => setMobileNavOpen(true)} />
      <NavBar
        onMobileClose={() => setMobileNavOpen(false)}
        openMobile={isMobileNavOpen}
      />
      <Page
        className={classes.root}
        title="Customers"
      >
        <div className={classes.wrapper}>
          <div className={classes.contentContainer}>
            <div className={classes.content}>
              <Container maxWidth={false}>
                <Toolbar />
                <Box mt={3}>
                  <Results customers={customers} />
                </Box>
              </Container>
            </div>
          </div>
        </div>
      </Page>
    </div>
  );
};

export default CustomerListView;
