import React, { useEffect, useState } from 'react';
import { useAuth, SignOutButton } from '@clerk/clerk-react';
import axiosInstance from '../utils/axiosInstance';

const Dashboard = () => {
  const { userId, signOut } = useAuth();
  const [userDetails, setUserDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axiosInstance.get(`/${userId}/dashboard`);
        setUserDetails(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false); // Stop loading once data is fetched
      }
    };

    if (userId) {
      fetchUserDetails();
    }

    // Logout user before window/tab is closed
    const handleBeforeUnload = async () => {
      if (userId) {
        try {
          await signOut(); // Log out the user
        } catch (error) {
          console.error('Error logging out before unload:', error);
        }
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [userId, signOut]);

  if (!userDetails) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="container dashboard-container">
      <h1>Dashboard</h1>
      <div className="user-details">
        <p>{userDetails.message}</p>
        <p><strong>User ID:</strong> {userDetails.userId}</p>
        <p><strong>Username:</strong> {userDetails.username}</p>
        <p><strong>Email:</strong> {userDetails.email}</p>
      </div>
      <SignOutButton>
        <button className="sign-out-btn">Sign Out</button>
      </SignOutButton>
    </div>
  );
};

export default Dashboard;
