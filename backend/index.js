import express from 'express';
import { ClerkExpressWithAuth, clerkClient } from '@clerk/clerk-sdk-node';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors()); // Allow frontend to communicate with backend
app.use(express.json());

// Route for Clerk Authentication middleware
app.use(ClerkExpressWithAuth());

// Home route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Clerk Authentication App' });
});

// Dashboard route
app.get('/:userId/dashboard', async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await clerkClient.users.getUser(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json({
      message: `Welcome to your dashboard, ${user.username || 'User'}!`,
      userId: user.id,
      username: user.username || 'No username available',
      email: user.emailAddresses[0]?.emailAddress || 'No email available',
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error retrieving user data' });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`);
});
