import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//React Router
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

//React toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

//Firebase
import firebase from 'firebase/app';
import 'firebase/auth';

//Components
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import PageNotFound from './pages/PageNotFound';
import { UserContext } from './Context/UserContext';

import Header from './Layouts/Header';

import Forgot from './pages/Forgot';

import FirebaseConfig from './Config/FirebaseConfig';
import Issues from './pages/Issues';
//init Firebase
firebase.initializeApp(FirebaseConfig);

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/issues' component={Issues} />
          <Route exact path='/signin' component={SignIn} />
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/forgot-password' component={Forgot} />
          <Route exact path='*' component={PageNotFound} />
        </Switch>
      </UserContext.Provider>
    </Router>
  );
};

export default App;
