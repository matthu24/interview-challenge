import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ColorsIndex from './colors_index';
import ColorsShow from './colors_show';
import Nav from './nav';
import SideBar from './side_bar';

const App = () => (
  <div>
    <Route path = "/" component={Nav}/>
    <Route path = "/" component={SideBar}/>
    <Route path = "/" component={ColorsIndex}/>

    <Switch>

    </Switch>
  </div>
)

export default App;
