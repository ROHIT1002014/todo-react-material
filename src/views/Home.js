import React from "react";
import { connect } from 'react-redux';

import {
  Grid,
  CssBaseline,
} from "@material-ui/core";

import NavBar from "../components/dashboard/Header";
import Features from "../components/dashboard/body/features/Features";
import Introduction from "../components/dashboard/body/introduction/Introduction";
import Description from "../components/dashboard/body/description/Description";
import Footer from "../components/dashboard/Footer";
// Important github
// https://github.com/marmelab/react-admin/blob/master/examples/demo/src/dashboard/Welcome.tsx
// for cerosal
// https://github.com/merikbest/ecommerce-spring-reactjs
const ClippedDrawer = (props) => {
  const { featuredPosts, post, footers, navlinkList } = props;
  return (
    <React.Fragment>
      <CssBaseline />
      <NavBar navlinkList={navlinkList} />
      <Introduction post={post} />
      <Grid container spacing={4}>
        {featuredPosts.map((post) => (
          <Description key={post.title} post={post} />
        ))}
      </Grid>
      <Features />
      <Footer footers={footers} />
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    featuredPosts: state.rootReducer.featuredPosts,
    post: state.rootReducer.post,
    footers: state.rootReducer.footers,
    navlinkList: state.rootReducer.navlinkList,
  }
}

export default connect(mapStateToProps)(ClippedDrawer);