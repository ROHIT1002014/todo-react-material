/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Link from '@material-ui/core/Link';
import { Toolbar } from '@material-ui/core';
import useStyles from './styles';

const sections = [
  { title: 'UPSC', url: '#' },
  { title: 'CTET', url: '#' },
  { title: 'Comptetive Coding', url: '#' },
  { title: 'SSC', url: '#' },
  { title: 'NDA', url: '#' },
  { title: 'CDSE', url: '#' },
  { title: 'SBI PO', url: '#' },
  { title: 'RRB NTPC', url: '#' },
  { title: 'RBI', url: '#' },
  { title: 'IBPS PO', url: '#' },
];

export default function MainFeaturedPost() {
  // const { post } = props;
  const classes = useStyles();

  return (
    <>
      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            className={classes.toolbarLink}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </>
  );
}

MainFeaturedPost.propTypes = {
  // eslint-disable-next-line react/require-default-props
  post: PropTypes.object,
};
