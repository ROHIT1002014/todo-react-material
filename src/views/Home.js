import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import Footer from "../components/dashboard/Footer";
import NavBar from "../components/dashboard/Header";
import Features from '../components/dashboard/body/features/Features';

export default function ClippedDrawer() {
  // const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <NavBar />
      <Features />
      <Footer />
    </React.Fragment>
  );
}
