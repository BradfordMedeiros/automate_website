import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Tutorials from './Tutorials';
import TutorialSchema from './TutorialSchema';
import basicContent from './TutorialLibrary/basic.content';
import installationContent from './TutorialLibrary/installation.content';

const routes = () => (
  <Route path="/tutorials" >
    <IndexRoute component={Tutorials}/>
    <Route path="/tutorials/basics" component={() => <TutorialSchema content={basicContent} />}/>
    <Route path="/tutorials/installation" component={() => <TutorialSchema content={installationContent}/>}/>
  </Route>
);

export default routes;