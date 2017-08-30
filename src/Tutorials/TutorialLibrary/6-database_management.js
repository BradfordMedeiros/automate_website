import React from 'react';

export default {
  title: 'Tutorial 6: Database Management',
  sections: [

    {
      type: 'overview',
      content: 'Overview',
    },
    {
      type: 'exposition',
      content: (
        <div>
          This tutorial will teach you about the concept of database management, how to use it.
          <br/><br/>
          After this tutorial you will understand what database management is within the concept of
          database management within automate.
        </div>
      ),
    },

    {
      type: 'space',
    },
    {
      type: 'space',
    },
    {
      type: 'overview',
      content: 'Database Management - Conceptual',
    },
    {
      type: 'exposition',
      content:  (
        <div>
          What is database management all about?
          <br /><br />
          In automate, we save a variety of data.  For example, every single user-script such as StateScripts, ActionScripts,
          and Conditions are saved to a database, as well as other configurations such as sequences, and so on. We also notably
          save the last value of MQTT topics so we can view what topics are present in the system, as well as some other data.
          <br/> <br/>
          This means that anything you did to set up your system from the perspective of automate, will be saved to the automate
          database.

          <br /><br />
          If you wish to be able to move settings from one automate system to another, create a backup of your database,
          copy your existing database, or other operations, these mechanisms are provided for you.  In general I would recommend
          backing up your database locally, since in the case of device failure, you will have a copy of your settings and backing up
          to a seperate device so you will have a copy of your settings in the  case of device failure.

          <br /><br />
          Generally database management is useful if you have a system you are heavily invested in for  data you do not
          want to lose.  It is basically the equivalent of having multiple save files for your system.
        </div>
      )
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
      content: 'Creating, Deleting, Backing up Databases'
    },
    {
      type: 'definition',
      name: 'Step 1',
      content: 'Click here to download a copy of the raspberry pi image',
    },
    {
      type: 'space',
    },
    {
      type: 'overview',
      content: 'General Information on Databases'
    },
    {
      type: 'iframe',
      content: 'https://www.youtube.com/embed/-TX6o7R8LSg'
    }
  ],
};