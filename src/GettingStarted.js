

import React from 'react';
import Layout from './BasicLayout/Layout';
import Title from './common/Title';

const GettingStarted = () => (
  <Layout padded>
    <Title>Quick Start</Title>
    <div style={{ fontFamily: 'monospace', fontSize: 18 }}>
    This tutorial is meant to get you up in running with automate quickly.
    <br /><br />
    1. First, we will talk generally about what automate is
    <br />
    2. Then, we will go through installing automate
    <br />
    3. Lastly, we will go through a tour of the basic features of automate so we can get a feel of what the system can do
    <br /><br/><hr /><br />
    </div>

    Automate is a home automation system for electronics.  It is not meant to be able to connect to every device, or protocol (yet), and values
    simplicity.  It prefers programming and writing small scripts to configuration files.  It provides a logic engine, scheduler, sequencer, and other utilities.
    All actions are convention based, such that a schedule can call a sequence, for example.

    Everything is path based. Actions and states make up the two fundamental units of the system, and most conventions are based on extending the mqtt architecture,
    although this could be semi-transparent to the user.  HTTP is also supported.  For details on the pattern we use, see Tutorial 0 - The Basics.

    <br />
    Why use automate?  A common use case is using an Arduino to turn on leds, motors or other sensors.  A user might have various controllers,
    but reprogramming can be difficult.  Automate is the central brains, to be able to easily reconfigure the logic.

    <br /><br  />
    Automate serves two primary purposes:
    <hr />
    <ol>
      <li>
        Utilities and convention to allow for reprogrammability - logic engine, scheduling, general user scripting, and so on.
      </li>
      <li>
        Data visualization and interaction as a dashboard available on desktop and mobile.  Minimal configuration.
      </li>
    </ol>
    Automate should be easier to use than hard coupling
    logic.  Automate should represent a recommended solution of the easiest way to get something to happen, while providing extra capabilities.
    Production ready?  No reason you cannot use this in bigger systems, but I care about the electronic hobbiest.  This is for them.
  </Layout>
);

export default GettingStarted;