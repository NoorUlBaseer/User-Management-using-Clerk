import React from 'react';
import { SignInButton, SignUpButton, useAuth } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { userId } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (userId) {
      navigate(`/${userId}/dashboard`);
    }
  }, [userId, navigate]);

  return (
    <div className="container home-container">
      <h1>Welcome to Clerk Authentication</h1>
      <SignInButton mode="modal">
        <button>Sign In</button>
      </SignInButton>
      <SignUpButton mode="modal">
        <button>Sign Up</button>
      </SignUpButton>
    </div>
  );
};

export default Home;
