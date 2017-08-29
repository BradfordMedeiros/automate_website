import React from 'react';

export default {
  title: 'Tutorial 2: States, Actions, and the Dashboard',
  sections: [
    {
      type: 'overview',
      content: 'Overview',
    },
    {
      type: 'exposition',
      content: (
        <div>
          This tutorial will teach you about the concept of states, actions, and the dashboard, and how to use them.          <br/><br/>
          After this tutorial you will be able to use basic controls to interact with your system, and add to basic information of your system.
        </div>
      ),
    },
    {
      type: 'space',
    },
    {
      type: 'overview',
      content: 'States',
    },
    {
      type: 'exposition',
      content:  'A state represents information about the state of the system.  A state corresponds directly to an MQTT topic and can be subscribed to, and publishes to ' +
      'simply via publishing to the corresponding state name.  States are prefixed with the top level path of /state/\<rest of name here\>.  For example, to represent temperature' +
      'we might represent it with the state states/temperature, or with a deeper path states/room/temperature.  When we publish a topic that has the topic level path of the ' +
      'states prefix, the automate system will automatically register this as a system state.   To get information of this content, simply treat it as mqtt.  We do not break ' +
      'the MQTT interface in general through the rest of the system.  While in general, you might wonder why we need to publish a topic as a state topic, as oppposed to a general' +
      'topic.  The advantages are that the system can these states for other purposes, elsewhere in the system.  Additionally, this is a good recommendation for automate topics.' +
      'In general, by prefixing this as state information, we communicate conceptually to the rest of the system that this topic represents state and is meant to provide information.' +
      'For example, an endpoint that opens a door, generally as a convention should not open a door based upon a state, but rather as an action, which we will talk about later.'
    },
    {
      type: 'section',
      content: 'Publishing a State',
    },
    {
      type: 'definition',
      name: 'Step 1: Understanding the UI',
      content: (
        <div>
          <div>To publish a state, simply up automate and navigate to the states tab</div>
          <div>(add image here)</div>
        </div>
      ),
    },
    {
      type: 'definition',
      name: 'Step 2: Enter the value and press publish',
      content: 'Just like that, enter a value on the bar an press enter!'
    },
    {
      type: 'space',
    },
    {
      type: 'overview',
      content: 'Actions',
    },
    {
      type: 'exposition',
      content:  'An action represents what the system can do.  An action corresponds directly to an MQTT topic and can be subscribed to, and publishes to ' +
      'simply via publishing to the corresponding action name.  Actions are prefixed with the top level path of /actions/\<rest of name here\>.  For example, to represent the ability' +
      'to open a door we might represent it with the action actions/open_door, or with a deeper path actions/room/open_door.  When we publish a topic that has the topic level path of the ' +
      'actions prefix, the automate system will automatically register this as a system actions.   Actions, from the point of view of automate, are for user display and ui' +
      ' purposes and illustrate what the system can do, and while nothing stops you from creating an endpoint responding to a state, or a general topic directly' +
      ' we recommend using the actions pattern.  This makes it explicit what actions are reactive, and which ones are meant to provide information.  ' +
      ' Consider the fact that relying on the request to for open a door to provide information about the state of the door is generally incorrect.  The endpoint receives a message -- a request -- to open the door, and confirms  the door' +
      ' opening via a state confirmation.  Furthermore, the ordering of the events will be incorrect, because if other subscribers are subscribing the command to open the door to indicate door state,' +
      ' especially in the slower mechanical world, this will be misordered.'
    },
    {
      type: 'section',
      content: 'Publishing an Action'
    },
    {
      type: 'definition',
      name: 'Step 1: Navigate to actions ui and publish an action, this should look familiar',
      content: (
        <div>need to add image</div>
      )
    },
    {
      type: 'space',
    },
    {
      type: 'overview',
      content: 'Dashboard',
    },
    {
      type: 'exposition',
      content:  'The dashboard is what you look at upon starting the user interface for automate, and is a rearrange drag' +
      'and drop tile grid, that can be thought of as a interactive toy box for interacting with your system. Tiles can mostly' +
      'do anything, and are meant to represent micro units of functionality.  For example, buttons might map to specific actions,' +
      'different displays may display a freezing penguin if it is cold, or a blaring sun if it is hot.  In the future, an open api to add' +
      'user tiles will be made.  For now, a selection of tiles is available in the app. Generally, the pattern is that a double  click to the' +
      'tile opens up a drop down menu that configures the tile if necessary.  Generally the tiles currently ask you to enter a specific mqtt topic' +
      'for them to map to.  This means that a button may be configured for a specific topic/value combo, and upon pressing it you will trigger that to be sent. ' +
      'For example, we might set up the button to actions/room1/open_door with value open, and another with the value close.  This is instant ui for opening and' +
      'closing the door.  Alternatively, a slider might be more appropriate for a control of a thermostat.  In general, the best way to learn each tile, is to play ' +
      'around with them.  A good tile is a simple tile.'
    },
    {
      type: 'space',
    },
    {
      type: 'space',
    },
    {
      type: 'overview',
      content: 'Video tutorial of States, Actions, and the DashboardZ'
    },
    {
      type: 'iframe',
      content: 'https://www.youtube.com/embed/-TX6o7R8LSg'
    }
  ],
};