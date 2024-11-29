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

## Application Flow

1. Users land on the Home page with Sign In and Sign Up buttons
2. Clicking these opens Clerk's authentication modal
3. After successful authentication, users are redirected to their personalized dashboard
4. Dashboard displays user information like user ID, username, and email
5. Users can sign out directly from the dashboard

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
