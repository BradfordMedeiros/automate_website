import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import Layout from './BasicLayout/Layout';
import Introduction from './Introduction';
import GettingStarted from './GettingStarted';
import tutorialRoutes from './Tutorials/routes';
import Downloads from './Downloads';
import FAQ from './FAQ/FAQ';
import './style.css';

const App = () => (
  <Router history={browserHistory}>
    <Route  path="/" component={() => (
      <Layout>
        <Introduction/>
      </Layout>
    )} />
    <Route path="/getting_started" component={GettingStarted}/>
    <Route path="/download" component={Downloads}/>
    <Route path="/faqs" component={FAQ}/>
    {tutorialRoutes()}
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
