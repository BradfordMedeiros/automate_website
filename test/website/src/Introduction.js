
import React from 'react';

const styles = {
  content: {
    left: 0,
    right: 0,
    top: 0,
    bottom: '50%',
    background: 'linear-gradient(rgb(20,20,20),rgb(16,16,16))',
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: 48,
    boxShadow: '0px 0px 10px 4px black inset',

  },
  description: {
    bottom: 0,
    left: 0,
    right: 0,
    bottom: 0,
    top: '50%',
    background: 'linear-gradient(rgb(55, 55, 55), rgb(16, 16, 16))',
    position: 'absolute',
  },
  text: {
    position: 'absolute',
    width: '80%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    marginLeft: '10%',
    marginRight: '10%',
    background: 'linear-gradient(rgb(40,40,40),rgb(20,20,20))',
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'left',
    padding: 32,
    border: '1px solid black',
    margin: 24,
    boxShadow: '0px 0px 4px 1px rgba(0, 0, 0, 0) inset',
    fontFamily: 'Courier',
  },
  subtitle: {
    fontSize: 16,
  }
  /*automate_pic: {
    background: 'linear-gradient(rgb(20,20,20),rgb(16,16,16))',
    width: '100%',
    height: '40%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: 48,
    fontFamily: 'impact',
    boxShadow: '0px 0px 2px 4px #2f2222',
  }*/
};


const Introduction = () => (
  <div style={{ width: '100%', height: '100%', background: 'blue'}}>
    <div style={styles.content}>
        automate
        <div style={styles.subtitle}>home automation for electronics</div>
    </div>
    <div style={styles.description} >
      <div style={styles.text}>
        <div style={styles.paragraph}>
          Rapid Prototyping.
        </div>
        <div style={styles.paragraph}>
          Electronic Playground
        </div>
        <div style={styles.paragraph}>
          No Big Brother
        </div>
      </div>
    </div>
    {/*<div style={styles.automate_pic}>
      automate
      <div id="subtitle">home automation for electronics</div>
    </div>
    <div class="text">
      <div class="paragraph">
        Rapid Prototyping.
      </div>
      <div class="paragraph">
        Freedom in electronics.
      </div>
      <div class="paragraph">
        No big brother.
      </div>
    </div>*/}
  </div>
);

export default Introduction;