import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, SignIn, SignUp } from './pages';
import { AuthProvider } from './auth/Auth';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Route exact path='/' component={Home} />
          <Route exact path='/signin' component={SignIn} />
          <Route exact path='/signup' component={SignUp} />
        </div>
      </Router>
    </AuthProvider>

  )
}

export default App;
