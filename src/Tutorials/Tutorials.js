import React from 'react';
import Layout from '../BasicLayout/Layout';
import Header from '../common/Header';
import { browserHistory } from 'react-router';

const Tutorials = () => (
  <Layout padded>
    <div>
    <Header onClick={() => { browserHistory.push('/tutorials/basics')}}>
      The Basics - Thinking in Automate
    </Header>
    <Header onClick={() =>  { browserHistory.push('/tutorials/installation')}}>
      Grunt Work - Installation
    </Header>
    <Header onClick={() => { browserHistory.push('/tutorials/states_actions_dashboard')}}>
      States and Actions, Using the Dashboard
    </Header>
    <Header onClick={() => { browserHistory.push('/tutorials/conditions_and_rules')}}>
      Add Some Logic - Conditions and Rules
    </Header>
    <Header onClick={() => { browserHistory.push('/tutorials/sequences_and_schedules')}}>
      Making Things Happen in Order - Sequences and Schedules
    </Header>
    <Header onClick={() => { browserHistory.push("/tutorials/events")}}>
      Convenient Utilities - Logging an Event, Email Alerts
    </Header>
      <Header onClick={() => { browserHistory.push("/tutorials/database_management")}}>
      Managing Multiple Systems - Databases
    </Header>

    </div>
  </Layout>
);

export default Tutorials;