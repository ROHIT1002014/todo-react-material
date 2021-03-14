import React, { useState } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core';
import Page from '../../components/Page';
import NavBar from '../../layouts/DashboardLayout/NavBar/teacher/index';
import TopBar from '../../layouts/DashboardLayout/TopBar';

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

const CustomerListView = (props) => {
  const { teacherNavItems } = props;
  const classes = useStyles();
  // const [customers] = useState(studnetData);
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className={classes.root}>
      <TopBar onMobileNavOpen={() => setMobileNavOpen(true)} />
      <NavBar
        onMobileClose={() => setMobileNavOpen(false)}
        openMobile={isMobileNavOpen}
        teacherNavItems={teacherNavItems}
      />
      <Page
        className={classes.root}
        title="Customers"
      >
        <h1>laksdflkajsdflkjadsf</h1>
      </Page>
    </div>
  );
};
const mapStateToProps = (state) => ({
  studnetData: state.rootReducer.studnetData,
  teacherNavItems: state.rootReducer.teacherNavItems,
});

export default connect(mapStateToProps)(CustomerListView);
