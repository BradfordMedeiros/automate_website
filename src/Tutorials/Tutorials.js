import React from 'react';
import Layout from '../BasicLayout/Layout';
import Header from '../common/Header';
import { browserHistory } from 'react-router';

const Tutorials = () => (
  <Layout padded>
    <Header onClick={() => { browserHistory.push('/tutorials/basics')}}>
      Basics- Thinking in Automate, States and Actions, Using the Dashboard
    </Header>
    <Header>
      Conditions and Rules
    </Header>
    <Header>
      Creating a Sequence
    </Header>
    <Header>
      Creating a Schedule
    </Header>
    <Header>
      Logging an Event, Email Alerts
    </Header>
  </Layout>
);

export default Tutorials;