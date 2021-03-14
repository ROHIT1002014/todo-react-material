import React, { Component } from 'react';
import log from 'loglevel';

import {
  makeStyles,
  Grid,
  Paper,
} from '@material-ui/core';

import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

import Orders from '../../components/home/Order';
import Marks from '../../components/home/status/Marks';
import Profit from '../../components/home/status/Profit';
import Progress from '../../components/home/status/Progress';
import StudentsStatus from '../../components/home/status/StudentsStatus';
import { whoAmI } from '../../services/UserAuth';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 2,
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
}));

class Dashboard extends Component {
  componentDidMount() {
    const { token } = this.props;
    log.debug(this.props);
    whoAmI(token).then((res) => {
      log.debug(`who am i response: ${res}`);
    });
  }

  render() {
    const { classes } = this.props;
    log.debug(classes);
    log.debug(this.props);
    return (
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <Marks />
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <Progress />
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <StudentsStatus />
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <Profit />
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Orders />
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.authReducer.token,
});

export default connect(mapStateToProps)(withStyles(useStyles)(Dashboard));
