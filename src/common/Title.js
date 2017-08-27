
import React from 'react';
const style = {
  fontSize: 48,
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  marginTop: 48,
  marginBottom: 32,
  color: 'whitesmoke',
  borderBottom: '2px solid grey',
};

const Title = ({ children }) => (
  <div style={style}>{children}</div>
);

export default Title;

