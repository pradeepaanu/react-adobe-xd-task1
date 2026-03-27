# PopX - MERN Stack Project

A full-stack web application for account management built with MERN (MongoDB, Express, React, Node.js).

## Project Structure

```
mern_prj/
├── backend/
│   ├── models/
│   │   └── User.js
│   ├── controllers/
│   │   ├── authController.js
│   │   └── userController.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── users.js
│   ├── server.js
│   ├── package.json
│   └── .env.example
└── frontend/
    ├── src/
    │   ├── pages/
    │   │   ├── Landing.js
    │   │   ├── Landing.css
    │   │   ├── Login.js
    │   │   ├── SignUp.js
    │   │   ├── Profile.js
    │   │   ├── Profile.css
    │   │   └── Auth.css
    │   ├── components/
    │   ├── styles/
    │   ├── App.js
    │   ├── App.css
    │   ├── index.js
    │   └── index.css
    ├── public/
    │   └── index.html
    └── package.json
```

## Features

- **User Authentication**: Register and login with email and password
- **User Profiles**: Create and view user profiles
- **Responsive Design**: Mobile-friendly UI with modern styling
- **State Management**: Local storage for authentication persistence

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file based on `.env.example`:
   ```bash
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/popx
   JWT_SECRET=your_jwt_secret_key_here
   NODE_ENV=development
   ```

4. Start the backend server:
   ```bash
   npm run dev
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the React development server:
   ```bash
   npm start
   ```

The frontend will open at `http://localhost:3000` and will communicate with the backend at `http://localhost:5000`.

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user

### Users
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user profile
- `PUT /api/users/:id` - Update user profile

## UI Pages

<img width="422" height="562" alt="image" src="https://github.com/user-attachments/assets/165eec5c-0ba5-4ff2-be57-1aa348b3f3ac" />
1. **Landing Page** - Welcome page with call-to-action buttons
<img width="409" height="573" alt="image" src="https://github.com/user-attachments/assets/74a43f70-9b70-4ab8-8040-e20176103a03" />
4. **Sign Up Page** - User registration form
<img width="374" height="508" alt="image" src="https://github.com/user-attachments/assets/56914862-b11c-480a-8cc0-c00fa291daf6" />
3. **Login Page** - User login form
<img width="539" height="558" alt="image" src="https://github.com/user-attachments/assets/4b0e89f6-5785-478a-8c65-2542ad13bb60" />
5. **Profile Page** - User profile display and information

## Technologies Used

- **Frontend**: React, React Router, Axios, CSS3
- **Backend**: Node.js, Express, MongoDB, Mongoose, JWT, bcryptjs
- **Database**: MongoDB

## License

This project is open source and available under the MIT License.
