import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Tutorials from './Tutorials';
import Basics from './TutorialLibrary/Basics';

const routes = () => (
  <Route path="/tutorials" >
    <IndexRoute component={Tutorials}/>
    <Route path="/tutorials/basics" component={Basics}/>
    <Route path="/tutorials/sequences" component={() => <div>sequeqnces</div>}/>
  </Route>
);

export default routes;