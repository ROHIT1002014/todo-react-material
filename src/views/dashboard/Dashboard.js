import React from "react";
import clsx from "clsx";

import {
  makeStyles,
  CssBaseline,
  Container,
  Grid,
  Paper,
} from "@material-ui/core";

import Deposits from "./../../components/home/Deposite";
import Orders from "./../../components/home/Order";
import Header from "./../../components/home/header/Header";
import Marks from "./../../components/home/status/Marks";
import Profit from "./../../components/home/status/Profit";
import Progress from "./../../components/home/status/Progress";
import StudentsStatus from "./../../components/home/status/StudentsStatus";
import LatestCourse from "./../../components/home/Course/LatestCourse";
import LatestEnrolledCourse from "./../../components/home/Course/LatestEnrolledCourse";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 2,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg">
          <Grid container spacing={3}>
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
            <Grid item lg={4} md={6} xl={3} xs={12}>
              <LatestCourse />
            </Grid>
            <Grid item lg={8} md={12} xl={9} xs={12}>
              <LatestEnrolledCourse />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}></Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Deposits />
              </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Orders />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}
