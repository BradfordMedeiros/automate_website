
import React from 'react';

const getStyle = clickable => ({
  fontSize: 24,
  margin: 12,
  fontFamily: 'Courier',
  boxShadow: '0px 0px 4px 1px black inset',
  padding: 48,
  paddingBottom: 48,
  border: '1px solid #373737',
  marginTop: 48,
  marginBottom: 0,
  cursor: clickable ? 'pointer': undefined,
});

const Header = ({ children, ...otherProps }) => (
  <div {...otherProps} style={getStyle(otherProps.onClick !== undefined)}>{children}</div>
);

export default Header;