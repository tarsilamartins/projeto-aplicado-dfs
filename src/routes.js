import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Cadastro from './pages/Cadastro/Cadastro';
import TiposDeInv from './pages/TiposDeInv/TiposDeInv';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/cadastro" component={Cadastro} />
      <Route path="/tipos-de-investidores" component={TiposDeInv} />
    </Switch>
  );
}

export default Routes;
