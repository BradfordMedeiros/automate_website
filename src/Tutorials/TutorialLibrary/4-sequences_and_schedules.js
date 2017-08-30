import React from 'react';

export default {
  title: 'Tutorial 4: Sequences and Schedules',
  sections: [

    {
      type: 'overview',
      content: 'Overview',
    },
    {
      type: 'exposition',
      content: (
        <div>
          This tutorial will teach you about the concept of sequences and schedules, and how to use them.
          <br/><br/>
          After this tutorial you will be able to create a sequence such as specifying to turn on the light, and then to turn it off after
          10s ( a sequence), or something like turn the light off each Monday at 3pm (a schedule).
        </div>
      ),
    },
    {
      type: 'space',
    },
    {
      type: 'overview',
      content: 'Sequences',
    },
    {
      type: 'exposition',
      content:  (
        <div>
          A sequence is something automate which allows the user to specify a sequence of MQTT topics
          to publish to the system, and specifying timing between them.  This allows you to, provided endpoints
          exist to support the functionality, send off a sequence of actions (or other topic) specifying to,
          for example, open a door, turn off a light, and specify a time between the topics being sent.
          <br /><br />
          A sequence directly maps to a topic based on its naming.  All schedules are prefixed  with the topic level
          path of /schedule/(rest of topic name).  When a value is published to the corresponding schedule topic,
          the schedule will be executed.  This makes it compatibility with base MQTT functionality.
        </div>
      )
    },
    {
      type: 'section',
      content: 'Creating a sequence',
    },
    {
      type: 'definition',
      name: 'Step 1: Understanding the UI',
      content: (
        <div>
          <div>To create a condition, simply up automate and navigate to the conditions tab</div>
          <div>(add image here)</div>
        </div>
      ),
    },
    {
      type: 'definition',
      name: 'Step 2: Enter new code, and update',
      content: 'Just like that, enter a value on the bar an press enter!'
    },
    {
      type: 'space',
    },
    {
      type: 'overview',
      content: 'Schedules',
    },
    {
      type: 'exposition',
      content:  (
        <div>
         A schedule is a a user defined setting which the user specifies a timing for which a mqtt topic-value pair
         to be published.   For example,  this allows us to publish an MQTT topic every Monday, or every day during
         the month of January, and so on.

          <br/> <br />
          Within the UI, the schedule roughly corresponds to a cron expression.  In general, the UI can be thought of
          as a intersection of all the selected options.

        </div>
      )
    },
    {
      type: 'section',
      content: 'Creating a schedule'
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
      type: 'space',
    },
    {
      type: 'overview',
      content: 'Video tutorial of Sequences and Schedules'
    },
    {
      type: 'iframe',
      content: 'https://www.youtube.com/embed/-TX6o7R8LSg'
    }
  ],
};