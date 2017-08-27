import React from 'react';
import Layout from '../BasicLayout/Layout';
import Header from '../common/Header';
import { browserHistory } from 'react-router';

const Tutorials = () => (
  <Layout padded>
    <div>
    <Header onClick={() => { browserHistory.push('/tutorials/basics')}}>
      000: The Basics - Thinking in Automate, States and Actions, Using the Dashboard
    </Header>
    <Header>
      001: Grunt Work - Installation
    </Header>
    <Header>
      010: Add Some Logic - Conditions and Rules
    </Header>
    <Header>
      011: Making Things Happen in Order - Sequences and Schedules
    </Header>
    <Header>
      100: Convenient Utilities - Logging an Event, Email Alerts
    </Header>
    <Header>
      101: Managing Multiple Systems - Databases
    </Header>

    </div>
  </Layout>
);

export default Tutorials;