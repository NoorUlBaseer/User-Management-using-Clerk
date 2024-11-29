import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { RedirectToSignIn, SignedIn, SignedOut, useAuth } from '@clerk/clerk-react';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import './styles.css'

const App = () => {
  const { userId } = useAuth();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path={`/:userId/dashboard`}
          element={
            <SignedIn>
              <Dashboard />
            </SignedIn>
          }
        />
        <Route path="/sign-in/*" element={<RedirectToSignIn />} />
        <Route path="/sign-up/*" element={<RedirectToSignIn />} />
      </Routes>
    </Router>
  );
};

export default App;
