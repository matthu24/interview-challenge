import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ColorsIndex from './colors_index';
import ColorsShowContainer from './colors_show';
import Nav from './nav';
import SideBar from './side_bar';

const App = () => (
  <div>
    <Route path = "/" component={Nav}/>
    <Route path = "/" component={SideBar}/>

    <Switch>
      <Route exact path = "/" component={ColorsIndex}/>
      <Route exact path = "/detail" component={ColorsShowContainer}/>

    </Switch>
  </div>
)

export default App;
