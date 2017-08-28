
export default {
  title: 'Tutorial 3: Conditions and Rules',
  sections: [

    {
      type: 'overview',
      content: 'Overview',
    },
    {
      type: 'exposition',
      content: 'This tutorial will teach you how to install automate',
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
      content: 'Raspberry Pi Installation'
    },
    {
      type: 'definition',
      name: 'Step 1',
      content: 'Click here to download a copy of the raspberry pi image',
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
      name: 'Conditions',
      content: 'Conditions are small scripts defined in javascript, that are used elsewhere in the system. ' +
      'They are scripts that return true or false. They may access state information, or other information external to automate via http, or other method.'
    },
    {
      type: 'section',
      content: 'Linux Installation'
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
      type: 'section',
      content: 'Windows Installation'
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
      type: 'section',
      content: 'Building from source'
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
      content: 'General Information on Installation'
    },
    {
      type: 'iframe',
      content: 'https://www.youtube.com/embed/-TX6o7R8LSg'
    }
  ],
};