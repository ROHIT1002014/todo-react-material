import React, { forwardRef } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

const Page = forwardRef(({
  children,
  title = '',
  ...rest
}, ref) => (
  <div
    ref={ref}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...rest}
  >
    <Helmet>
      <title>{title}</title>
    </Helmet>
    {children}
  </div>
));

Page.propTypes = {
  children: PropTypes.node.isRequired,
  // eslint-disable-next-line react/require-default-props
  title: PropTypes.string,
};

export default Page;
