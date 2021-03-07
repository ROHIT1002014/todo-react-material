import React from 'react';

const Logo = (props) => (
  <img
    alt="Logo"
    src="/static/logo.svg"
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  />
);

export default Logo;
