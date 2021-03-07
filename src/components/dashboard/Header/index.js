/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';
// import TopBar from "./TopBar";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import NavBar from './NavBar';

const Header = (props) => {
  const {
    classes, brand, navlinkList, categories,
  } = props;

  return (
    <div>
      {/* <TopBar /> */}
      <NavBar
        classes={classes}
        brand={brand}
        categories={categories}
        navlinkList={navlinkList}
      />
    </div>
  );
};

Header.defaultProps = {
  // eslint-disable-next-line react/default-props-match-prop-types
  categories: {
    rows: [],
  },
};

Header.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object,
  // eslint-disable-next-line react/require-default-props
  brand: PropTypes.string,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
