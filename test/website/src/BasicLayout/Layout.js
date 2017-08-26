
import React from 'react';
import { browserHistory } from 'react-router';
import './style.css';

const styles = {
  appbarStyle : {
    background: 'rgb(55,55,55)',
    boxShadow: '0px 0px 18px 0.1px #201818',
    border: '0.1px solid black',
    position: 'absolute',
    width: '100%',
    height: 48,
    minWidth: 700,
  },
  title: {
    color: 'grey',
    top: 8,
    height: 30,
    position: 'fixed',
    boxShadow: '0 0 13px 1px rgb(30,30,30) inset',
    padding: 2,
    paddingLeft: 20,
    paddingEight: 15,
    marginLeft: 30,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    fontSize: 18,
    fontStyle: 'normal',
    fontVariant: 'normal',
    fontWeight: 500,
    lineHeight: 26.4,
    borderBottom: '2px solid #352a2a',
  },
  menuStyle: {
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    width: '80%',
    left: 180,
    height: '100%',
    alignItems: 'center',
    border: '1px solid rgba(0, 0, 0, 0.5)',
  },
  childContainer: {
    width: '100%',
    top: 48,
    bottom: 0,
    position: 'absolute',
    boxShadow: '0px 0px 10px 1px black inset',
  }

};



const BasicLayout = ({ children} ) => (
  <div style={{ width: '100vw', height: '100vh' }}>
    <div style={styles.appbarStyle} id="appbar">
      <div style={styles.title}>automate</div>
      <div style={styles.menuStyle}>
        <div onClick={() => browserHistory.push('/')} className="menu_item" href="getting_started/index.html">Home</div>
        <div onClick={() => browserHistory.push('/getting_started')} className="menu_item" href="getting_started/index.html">Getting started</div>
        <div onClick={() => browserHistory.push('/download')} className="menu_item">Download</div>
        <div onClick={() => browserHistory.push('/tutorials')} className="menu_item tutorial">Tutorials</div>
        <div onClick={() => browserHistory.push('/faqs')} className="menu_item tutorial">FAQs</div>

      </div>
    </div>
    <div style={styles.childContainer}>
      {children}
    </div>

    </div>
)

export default  BasicLayout;