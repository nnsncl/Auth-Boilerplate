import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, SignIn, SignUp } from './pages';

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path='/' component={Home} />
        <Route exact path='/signin' component={SignIn} />
        <Route exact path='/signup' component={SignUp} />
      </div>
    </Router>
  )
}

export default App;
