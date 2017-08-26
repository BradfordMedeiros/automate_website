import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import Layout from './BasicLayout/Layout';
import Introduction from './Introduction';
import Tutorials from './Tutorials';
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
    <Route path="/getting_started" component={() => <div>todo</div>}/>
    <Route path="/tutorials" component={Tutorials}/>
    <Route path="/download" component={Downloads}/>
    <Route path="/faqs" component={FAQ}/>


  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
