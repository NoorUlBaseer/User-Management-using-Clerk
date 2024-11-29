import React from 'react';
import ReactDOM from 'react-dom';
import { ClerkProvider } from '@clerk/clerk-react';
import App from './App';

// Access the environment variable with the `REACT_APP_` prefix
const clerkKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

if (!clerkKey) {
  console.error("Error: Clerk publishable key is missing. Check your .env file.");
}

ReactDOM.render(
  <ClerkProvider publishableKey={clerkKey}>
    <App />
  </ClerkProvider>,
  document.getElementById('root')
);
