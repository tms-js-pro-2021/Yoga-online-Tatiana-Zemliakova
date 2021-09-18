import React from 'react';

import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import LoginPage from '../components/LoginPage';
import AdminPage from '../components/AdminPage';
import HomePage from '../components/HomePage';
import About from '../components/About';
import Teachers from '../components/Teachers';
import Timetable from '../components/Timetable';
import Contacts from '../components/Contacts/Contacts';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/teachers" component={Teachers}></Route>
        <Route path="/timetable" component={Timetable}></Route>
        <Route path="/contacts" component={Contacts}></Route>
        <Route path="/login" component={LoginPage}></Route>
        <Route path="/admin" component={AdminPage}></Route>
        <Route>
          404 not found <Link to="/login">login</Link>
        </Route>
      </Switch>
    </Router>
  );
}
