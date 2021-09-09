import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import LoginPage from '../LoginPage';
import AdminPage from '../AdminPage';
import HomePage from '../HomePage';
import './App.css';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="">
          <AdminPage />
        </Route>
        <Route>
          404 not found <Link to="/login">login</Link>
        </Route>
      </Switch>
    </Router>
  );
}
