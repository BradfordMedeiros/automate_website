import React, { Component } from 'react';
import Layout from '../BasicLayout/Layout';
import Header from '../common/Header';
import './style.css';

const styles = {
  page: {
    height: '100%',
    width: '100%',
    position: 'absolute',

    overflow: 'auto',
  },
};

const titleContentMapping = {
  'What is automate?': (
    <div>
      Automate is a home automation platform aimed specifically for electronics prototyping
      <p>Other home automation soltuions exists, but either as overly complex systems to configure or as a rigid platform in which you have no control</p>
      <p>The goal here is to make home automation more like an Arduino, and less like an advertising platform, for electronics.</p>
    </div>
  ),
  'What functionality does automate provide?': (
    <div>
      Automate provides the following functionality:
      <div>Common communication over MQTT.  Built in MQTT Broker</div>
      <div>Graphical user customizable dashboard featuring widgets to interact with mqtt data (buttons, sliders, visualizations, etc). works on both mobile and desktop</div>
      <div>Base functionality: A recommended pattern of states, actions, and conditions which represent system state</div>
      <div>Engines: A logic engine (think a when-do statement, instead of if then), a scheduler to schedule events to occur during specific days, and a sequencer to specify precision detail about the ordering of events</div>
      <div>Other functionality such as events, email alerts, and more</div>
      <div>Everything works out of the box.  No configuration unless it actually does something</div>

      For detailed information take a look at the tutorials tab.
    </div>
  ),
  'What is the basic use case?': 'I personally have found automate most useful in electronic prototyping.  One of my hobbiest has been to use an Arduino or ESP8266 in combination iwth' +
  'leds, different types of sensors such as humidity/temperature sensors, pressure sensors, and actuators such as motors, solenoids, relays, etc. I always found that I ended up creating a dumb' +
  'endpoint, maybe directly rigging together a couple of them and it ended there.  I wanted a system to be able to act as a layer of indirection to allow for easy reprogramming of my dumb endpoints. tO ALLOW' +
  'small toy projects to gain power in the scope of a larger system.  So I created automate, and my dumb endpoints now live as easy to reprogram configurable endpoints.',
  'How do i run autommate?': (
    <div>
      You can run automate however you would like.  I personally would recommend downloaded an official image and running it on a raspberry pi since it is the
      easiest way.  You can host it remotely if you wish on whichever server you would like, but I find it easiest to use the official raspberry pi image since
      mmong other things it solves the problem of having a static ip (via acting as a router).
    </div>
  ),
  'Why not use Echo or Google Home?': 'It might be interesting to combine the abilities, but in general automate will give you more control, and user customizability.' +
  'While you do not need to be a professional coder by any means to use automate, we fully embrace the hobbiest, who isnt afraid to write a bit of code, but similar to the ' +
  'Arduino mindset, we want to respect your time as a hobbiest with easy to use, powerful interfaces.  ',
};

class FAQ extends Component {
  state = {
    expandedIndex: 0,
  }
  render() {
    return (
      <Layout padded>
        <div style={styles.page}>
          {Object.keys(titleContentMapping).map((question, expandedIndex) => (
            [<Header
              onClick={() => {
                if (this.state.expandedIndex === expandedIndex){
                  this.setState({
                    expandedIndex: undefined,
                  })
                }else{
                  this.setState({
                    expandedIndex,
                  })
                }
              }}
            >
              {question}
            </Header>,
              (this.state.expandedIndex === expandedIndex) && (<div className="expanded_started">{titleContentMapping[question]}</div>)
            ]
          ))}
        </div>
      </Layout>
    )
  }
}

export default FAQ;