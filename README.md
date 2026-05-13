# PayTM Clone

A basic version of a PayTM-like money transfer app built with a React frontend and Node/Express backend.

## Overview

This project demonstrates a simple payment app flow with authentication, protected routing, and basic state optimization. The goal is to build a minimal PayTM-style interface while using modern React and backend patterns.

## Features

- React frontend with Vite
- Express backend with JWT-based authentication
- Protected routes for authenticated users
- Context API for auth state management
- Optimized rendering using `useMemo` and `useCallback`
- Basic user and account routes

## Achievements

- **Optimized rendering**
  - Used `React.memo` along with `useCallback` to prevent unnecessary rerenders for reusable components like `InputBox` and `Heading`.
- **Authentication context**
  - Implemented auth state management using React Context, allowing login state and user data to be shared cleanly across components.
- **Protected routing**
  - Added route guards so only authenticated users can access dashboard and money transfer pages.
<<<<<<< HEAD
- **Custom Hook**
  - Added custom hook UseDebouncing in filters reducing the backend calls
=======
>>>>>>> 380b689a3b52a81e9ff756b3943a94deb1c61e8f

## Current UI/UX

- Sign up and sign in flows
- Dashboard showing user details and balance
- Send money page to make transfers
- Basic navigation and layout components

## Todo / Improvements

- Add a secure **password input box** on forms
- Prevent sending money to the **logged-in user** by filtering self name
- Validate and format **amount decimals**
- Add **logout** functionality to clear auth state
<<<<<<< HEAD
=======
- Add **debouncing** in search/filter inputs
>>>>>>> 380b689a3b52a81e9ff756b3943a94deb1c61e8f

## Tech Stack

- Frontend
  - React
  - Vite
  - React Router DOM
  - Tailwind CSS
  - Axios

- Backend
  - Node.js
  - Express
  - Mongoose
  - JWT authentication
  - CORS

## Getting Started

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```
### Repository Structure
 - backend/
    - server.js
    - routes/
    - db.js
    - middleware.js
- frontend/

    - src/
    - Components/
    - guards/
    - pages/

