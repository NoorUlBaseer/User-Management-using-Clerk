# User Management and Authentication using Clerk 

## Overview

This is a full-stack authentication application built with React, Node, and Express, utilizing Clerk for robust, secure user authentication. The application provides a seamless sign-in, sign-up, and dashboard experience with protected routes.

## Features

- User Authentication with Clerk
- Protected Dashboard Route
- Responsive Design
- Automatic Redirection for Authenticated Users
- Secure Sign-In and Sign-Up Modals
- One-Click Sign Out

## Technologies Used

- **Frontend**: 
  - React
  - React Router
  - Clerk React SDK
  - Axios

- **Backend**:
  - Express.js
  - Clerk Node.js SDK
  - CORS

## Application Flow

1. Users land on the Home page with Sign In and Sign Up buttons
2. Clicking these opens Clerk's authentication modal
3. After successful authentication, users are redirected to their personalized dashboard
4. Dashboard displays user information like user ID, username, and email
5. Users can sign out directly from the dashboard

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or later)
- npm 
- A Clerk account

## Setup and Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/NoorUlBaseer/User-Management-using-Clerk.git
   cd <project-directory>
   ```

2. **Backend Setup**
   ```bash
   cd <project-directory>
   npm install
   ```
   **Note**: Do not navigate directly into the `backend` folder for backend setup.

3. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   ```

4. **Environment Configuration**
   Create `.env` files in both `backend` and `frontend` folders:

   **Backend `.env`**:
   ```
   CLERK_PUBLISHABLE_KEY=your_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   ```

   **Frontend `.env`**:
   ```
   REACT_APP_CLERK_PUBLISHABLE_KEY=your_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   ```

   *Note*: Obtain these keys from your [Clerk Dashboard](https://dashboard.clerk.dev/)

5. **Running the Application**

   Start the Backend:
   ```bash
   cd <project-directory>
   npm run dev
   ```
   **Note**: Do not navigate into the `backend` folder, as the `package.json` file is configured to run the `backend/index.js`. 

   Start the Frontend:
   ```bash
   cd frontend
   npm run dev
   ```

## Using the Application

After starting both the backend and frontend:

1. **Access the Application**
   - Open a web browser
   - Navigate to `http://localhost:3000` (default React development server)

2. **Landing Page**
   - You'll see the home page with "Sign In" and "Sign Up" buttons

3. **Authentication**
   - Click "Sign Up" to create a new account
     - Enter your email
     - Create a password
     - Complete any additional verification steps
   - Or click "Sign In" if you already have an account

4. **Dashboard Access**
   - After successful authentication, you'll be automatically redirected to your personal dashboard
   - The dashboard displays:
     - Personalized welcome message
     - Your User ID
     - Username (if set)
     - Email address

5. **Signing Out**
   - On the dashboard, click the "Sign Out" button to log out
   - You'll be redirected back to the home page

## Security Features

- Protected routes using Clerk's `SignedIn` and `SignedOut` components
- Automatic redirection for unauthenticated users
- Secure sign-out before window/tab closure
- Server-side user verification

## Customization

- Modify `styles.css` to change application styling
- Adjust route configurations in `App.js`
- Customize dashboard display in `Dashboard.js`

## Error Handling

- Console logs for authentication and data fetching errors
- User-friendly loading states
- Fallback routes for authentication

## Troubleshooting

- **Missing Clerk Key:** Ensure that the Clerk API keys are correctly placed in your `.env` files. Double-check that the keys are from your Clerk account.

- **Backend Errors:** Check the server logs for specific error messages and ensure that the Clerk SDK is correctly initialized.

- **CORS Issues:** If you encounter CORS issues, ensure that `cors()` middleware is correctly set up in the `backend/index.js` file.

Please review these troubleshooting steps if you encounter any issues while running the application. If the problem persists, feel free to reach out for further assistance.

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes 
4. Push to the branch 
5. Open a Pull Request

## License

Distributed under the MIT License. See [LICENSE](LICENSE.txt) for more information.

## Contact

Noor Ul Baseer - [noorulbaseer2021@gmail.com]

Project Link: https://github.com/NoorUlBaseer/User-Management-using-Clerk.git
