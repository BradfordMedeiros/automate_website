import React from 'react';

export default {
  title: 'Tutorial 5: Events and Email Alerts',
  sections: [

    {
      type: 'overview',
      content: 'Overview',
    },
    {
      type: 'exposition',
      content: (
        <div>
          This tutorial will teach you about the concept of events, and what they can do.
          <br/><br/>
          After this tutorial you will be able to log events, view the history for an event, and set up email alerts.
        </div>
      ),
    },
    {
      type: 'space',
    },
    {
      type: 'overview',
      content: 'Events',
    },
    {
      type: 'exposition',
      content:  (
        <div>
          An event is a mechanism in which can be used to log events of significance.  Events can be viewed in
          the UI, as a way to generally view interesting occurences, and can be configured to set up email alerts.
          <br /><br />
          An event maps directly the any topic which is prefixed by event/(rest of event name.  For example, we can
          send the combination - topic: events/garage/door, value: open, to specify a garage door opening, for example.
          This will be viewable in the UI with time data attached.
        </div>
      )
    },
    {
      type: 'section',
      content: 'Logging an Event',
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
      type: 'space',
    },
    {
      type: 'space',
    },
    {
      type: 'overview',
      content: 'Video tutorial of Events'
    },
    {
      type: 'iframe',
      content: 'https://www.youtube.com/embed/-TX6o7R8LSg'
    }
  ],
};