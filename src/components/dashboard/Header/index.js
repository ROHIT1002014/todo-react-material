import React from 'react';
import PropTypes from 'prop-types';
// import TopBar from "./TopBar";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import NavBar from './NavBar';

class Header extends React.Component {
  render() {
    const { classes, brand, categories } = this.props;

    return (
      <div>
        {/* <TopBar /> */}
        <NavBar
          classes={classes}
          brand={brand}
          categories={categories}
          navlinkList={this.props.navlinkList}
        />
      </div>
    );
  }
}

Header.defaultProps = {
  categories: {
    rows: [],
  },
};

Header.propTypes = {
  classes: PropTypes.object,
  brand: PropTypes.string,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
