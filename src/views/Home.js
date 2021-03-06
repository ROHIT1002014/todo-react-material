import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Grid, CssBaseline } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

import NavBar from '../components/dashboard/Header';
import Features from '../components/dashboard/body/features/Features';
import Introduction from '../components/dashboard/body/introduction/Introduction';
import Description from '../components/dashboard/body/description/Description';
import Footer from '../components/dashboard/Footer';
import Subscription from '../components/dashboard/body/subscriptions/Subscription';
// Important github
// https://github.com/marmelab/react-admin/blob/master/examples/demo/src/dashboard/Welcome.tsx
// for cerosal
// https://github.com/merikbest/ecommerce-spring-reactjs
class Home extends Component {
  render() {
    console.log('/*******/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/');
    console.log(`${process.env.REACT_APP_BAR}`);
    const {
      featuredPosts, post, footers, navlinkList,
    } = this.props;
    return (
      <>
        <CssBaseline />
        <NavBar navlinkList={navlinkList} />
        <Introduction post={post} />
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Our Regular Blogs
        </Typography>
        <Grid container spacing={4}>
          {featuredPosts.map(() => (
            <Description key={post.title} post={post} />
          ))}
        </Grid>
        <br />
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Top Educators
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
          Quickly build an effective pricing table for your potential customers with this layout.
        </Typography>
        <Features />
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Top Classes
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
          Quickly build an effective pricing table for your potential customers with this layout.
        </Typography>
        <Features />
        <Subscription />
        <Footer footers={footers} />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  featuredPosts: state.rootReducer.featuredPosts,
  post: state.rootReducer.post,
  footers: state.rootReducer.footers,
  navlinkList: state.rootReducer.navlinkList,
});

export default connect(mapStateToProps)(Home);
