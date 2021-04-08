import React from "react";

import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';


import Home from '../pages/Home';
import Profil from '../pages/Profil';
import Gateway from '../pages/Gateway';

const index = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Gateway} />
        <Route path="/home" exact component={Home} />
        <Route path="/profil" exact component={Profil} />
        <Redirect to="/home" />
      </Switch>
    </Router>
  );
};

export default index;
