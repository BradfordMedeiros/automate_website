import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Tutorials from './Tutorials';
import TutorialSchema from './TutorialSchema';
import basicContent from './TutorialLibrary/0-basic.content';
import installationContent from './TutorialLibrary/1-installation.content';
import statesActionsDashboardContent from './TutorialLibrary/2-states_actions_dashboard.content';
import conditionsAndRulesContent from './TutorialLibrary/3-conditions_and_rules.content';
import sequencesAndSchedules from './TutorialLibrary/4-sequences_and_schedules';
import events from './TutorialLibrary/5-events';
import databaseManagement from './TutorialLibrary/6-database_management';

const routes = () => (
  <Route path="/tutorials" >
    <IndexRoute component={Tutorials}/>
    <Route path="/tutorials/basics" component={() => <TutorialSchema content={basicContent} />}/>
    <Route path="/tutorials/installation" component={() => <TutorialSchema content={installationContent}/>}/>
    <Route path="/tutorials/states_actions_dashboard" component={() => <TutorialSchema content={statesActionsDashboardContent} />} />
    <Route path="/tutorials/conditions_and_rules" component={() => <TutorialSchema content={conditionsAndRulesContent} />} />
    <Route path="/tutorials/sequences_and_schedules" component={() => <TutorialSchema content={sequencesAndSchedules} />} />
    <Route path="/tutorials/events" component={() => <TutorialSchema content={events} />} />
    <Route path="/tutorials/database_management" component={() => <TutorialSchema content={databaseManagement} />} />


  </Route>
);

export default routes;