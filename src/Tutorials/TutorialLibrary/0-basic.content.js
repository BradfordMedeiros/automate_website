
export default {
  title: 'Tutorial 0: Thinking in automate',
  sections: [

    {
      type: 'overview',
      content: 'Overview',
    },
    {
      type: 'exposition',
      content: 'In brief, MQTT is a publication-subscription protocol. Basically, this means we publish a value to a value ' +
      'to a topic. Other clients choose to subscribe to topics, and will be delivered the relevant messages. These topics' +
      ' may be multi-level paths, similar to what you see on a filesystem. If MQTT sounds scary to you, or if youre a pro as programming, ' +
      'in any case do not fret. MQTT, from a user point of view, is a method of communication based upon key-value pairs, which means it maps ' +
      'things like the key temperature to the value 34, or the key room/tv/state to on or off. It is an application level protocol' +
      'In general, all features in the system are extensions of MQTT. For example, as youll see later, to log an  event which can be set ' +
      'up to send email alerts, we simply publish to events/(rest of event name here> with a value that will represent the message. This convention is' +
      ' used similarly through the system, and as an example, is also used to trigger sequences of events (which in themselves sequence mqtt topics to ' +
      'publish, in a time depedent order, which can be defined from the UI).'
    },
    {
      type: 'exposition',
      content: 'For example, I may care about temperature data in room0, which I denote by room0/temperature. ' +
      'Clients will subscribe to room0/temperature, and when the an endpointpublishes to room0/temperature, the ' +
      'value will be delivered to all clients subscribed. Notice how the publisher of a topic does not need to have ' +
      'direct knowledge of the other endpoints accept the central broker to which to publish, or subscribe to data from. This is the ' +
      'mechanism of decoupling we use to take advantage and make our dumb endpoints smart. For more information and details on MQTT, ' +
      'see this link. For the most part, a naive understanding of publish subscribe mechanism is all you will need, and the bigggest task might' +
      'be finding a client to use on your mqtt device. It is pretty common, but in case you may use HTTP POST/GET will polling as necessary instead.'
    },
    {
      type: 'space',
    },
    {
      type: 'space',
    },
    {
      type: 'overview',
      content: 'Definitions',
    },
    {
      type: 'section',
      content: 'Basesystem terminology'
    },
    {
      type: 'definition',
      name: 'States',
      content: 'States are values corresponding to MQTT topics representing the system state. ' +
      'These are meant to provide the system information.For example, temperature might receive the state named ' +
      'states/temperature with value 76, or a lightsource might broadcast states/room0/light_status and states/room0/light_status',
    },
    {
      type: 'definition',
      name: 'Actions',
      content: 'Actions are values corresponding to MQTT topics that are meant to trigger actions in the system. ' +
      'For example, a motor might respond to the action actions/door/door_motor, and upon receiving the topic will open the door ' +
      'if the value is on, else close the door.'
    },
    {
      type: 'definition',
      name: 'StateScripts',
      content: 'A StateScript is a user defined JavaScript script that is evaluated at a given rate an corresponds to a given topic.  For example, we may choose' +
      ' to create a statescript configured at a rate evaluation of every 30s that polls an HTTP endpoint for information about a favorite video game k/d ratio stats, and then ' +
      'publish that value to a path like states/games/halo/kill_death_ratio',
    },
    {
      type: 'definition',
      name: 'ActionScripts',
      content: 'An ActionScript is a user defined JavaScript script that is called when a value is published to the value the script corresponds to (it subscribes to the topic).' +
      '  For example, an ActionScript might be configured to the topic actions/slack/my_slack_channel/ , and when something publishes a value to that topic, the script' +
      ' could be set up to post via the SLACK api to post a message to that channel with the given value.'
    },
    {
      type: 'definition',
      name: 'Conditions',
      content: 'Conditions are small scripts defined in javascript, that are used elsewhere in the system. ' +
      'They are scripts that return true or false. They may access state information, or other information external to automate via http, or other method.'
    },
    {
      type: 'space',
    },
    {
      type: 'section',
      content: 'Engines terminology'
    },
    {
      type: 'definition',
      name: 'Rules',
      content: 'A Rule is a task which runs in the background at a given interval.  ' +
      'A rule is bound to a single condition, and will trigger based upon the edge type. When a rule is true, it is configured to send a message to a given mqtt topic.'
    },
    {
      type: 'definition',
      name: 'Sequences',
      content: 'Sequences are specific orders of mqtt topics to send, with specification of time. ' +
      'Sequences can be triggered by sending a message to the mqtttopic associated with the sequence.'
    },
    {
      type: 'definition',
      name: 'Schedules',
      content: 'Schedules are a background task that will trigger a mqtt message to be sent at a given time or occurence (daily, weekly, etc - cron specified)'
    },
    {
      type: 'space',
    },
    {
      type: 'section',
      content: 'Other terminology'
    },
    {
      type: 'definition',
      name: 'Events',
      content: 'Events are triggers by sending and mqtt topic to /event/(rest of event name) with a value that will be considered the message body. ' +
      'These can be used to log significant events of interest in the system, which can trigger email alerts and serve as a general history.'
    },
    {
      type: 'definition',
      name: 'ProtoProgrammer',
      content: 'Refers to specific hardware that can be used to easily read or output voltage from a circuit and translate it into an mqtt topic, no programming required.'
    },
    {
      type: 'space',
    },
    {
      type: 'space',
    },
    {
      type: 'overview',
      content: 'Video Version'
    },
    {
      type: 'iframe',
      content: 'https://www.youtube.com/embed/-TX6o7R8LSg'
    }
  ],
};