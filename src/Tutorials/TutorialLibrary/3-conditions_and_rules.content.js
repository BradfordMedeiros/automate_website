import React from 'react';

export default {
  title: 'Tutorial 3: Conditions and Rules',
  sections: [

    {
      type: 'overview',
      content: 'Overview',
    },
    {
      type: 'exposition',
      content: (
        <div>
          This tutorial will teach you about the concept of conditions and rules, and how to use them.
          <br/><br/>
          After this tutorial you will be able to create expressions like "when motion is detected turn on the light" or "when a light turns on, open the door".
        </div>
      ),
    },
    {
      type: 'space',
    },
    {
      type: 'overview',
      content: 'Condition',
    },
    {
      type: 'exposition',
      content:  (
        <div>
          A conditions is user defined script written in Javascript that will be evaluated, and return true or false.  Conditions are used elsewhere in the system
          specifically in the rules engine (detail below).   Scripts are meant to be a simple layer of logic which allows you to transform a value of one or more system states
          <br/><br/>
          For example, a condition may be called "is room empty", which could be a heuristic operation of raw motion detection thresholding, potentially combined with sound data,
          and so on.  Conditions do not correspond directly to an MQTT topic.  If you want to do this, you can create a StateScript and call evaluate to the condition (add link).
        </div>
      )
    },
    {
      type: 'section',
      content: 'Creating a condition',
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
      content: 'Rules',
    },
    {
      type: 'exposition',
      content:  (
        <div>
          A rule is simply a condition, which is ran at a set interval, and publishes to a topic with a given value when the condition meets certain criteria.
          <br />
          The criteria is one of the following:
          <ul>
            <li>positive-edge: the rule will publish to the topic when the condition is false, and then becomes true</li>
            <li>negative-edge: the rule will publish to the topic when the condition is true, and then becomes false</li>
            <li>each: the rule will publish to the topic is time the condition is true</li>
          </ul>
          It worthwhile noting that this means that the rate of polling can effect the behavior.  For example, if the interval is to large, you may missample data
          and never see a positive edge (aliasing).  This is effectively where we could talk about the Nyquist Theorem, but in general, the idea is we need pick a reasonable enough interval
          as to be  fast enough to catch these edges.  If you want to be able to respond to a light turning off at once every 5 seconds, you should basically pick a sampling rate
          with a period (the interval) of about half, with some extra room to account for real world latency of network, script exection, general fudge factor, etc, so say 2 seconds.
          The each polling will obviously have more implications in the sense that it will repeatedly send up topics every time the condition is true,  at that interval.
          Keep in mind that rules do not have any guarantees about when they will start, only the frequency of the interval.  If you want to do something at a daily occurence,
          see the section on schedules.
        </div>
      )
    },
    {
      type: 'section',
      content: 'Creating a rule'
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
      content: 'Video tutorial of States, Actions, and the DashboardZ'
    },
    {
      type: 'iframe',
      content: 'https://www.youtube.com/embed/-TX6o7R8LSg'
    }
  ],
};