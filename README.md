# Stock System Frontend - Complete Setup

## Project Structure

```
frontend/
├── pages/                          # Page components
│   ├── Login.jsx                   # Login page
│   ├── Login.css                   # Login styling
│   ├── Dashboard.jsx               # Main dashboard
│   └── Dashboard.css               # Dashboard styling
│
├── components/                     # Reusable components
│   ├── Navbar.jsx                  # Navigation bar
│   └── Navbar.css                  # Navbar styling
│
├── styles/                         # Global styles
│
├── App.js                          # Main app component
├── App.css                         # App styling
├── index.css                       # Global CSS
└── index.html                      # (Already exists in public/)
```

## Features Implemented

### ✅ Login Page
- Email and password input
- Error handling
- Loading state
- Beautiful gradient background
- Responsive design
- Connects to backend API

### ✅ Dashboard Page
- User greeting with role display
- Logout button
- Create new request form
- All requests table with:
  - Item name
  - Quantity
  - Priority (color-coded)
  - Status (color-coded)
  - Description
- Real-time display of requests

### ✅ Styling
- Modern gradient colors
- Responsive design (mobile, tablet, desktop)
- Professional UI
- Hover effects on buttons
- Color-coded priorities and statuses

## How to Run

### 1. Install Dependencies
```bash
cd frontend
npm install
```

### 2. Start the React App
```bash
npm start
```

The app will open at: `http://localhost:3000`

## Login Credentials

Use the credentials you registered in the backend:
- Email: john@example.com
- Password: password123

## API Integration

The app connects to your backend at:
- **Backend Base URL**: `http://localhost:5000`
- **Login Endpoint**: POST `/api/auth/login`
- **Get Requests**: GET `/api/requests`
- **Create Request**: POST `/api/requests`

## Components

### Login.jsx
- Handles user authentication
- Validates email and password
- Shows error messages
- Stores user data in state

### Dashboard.jsx
- Displays user information
- Shows all requests in a table
- Form to create new requests
- Priority and status badges
- Logout functionality

### Navbar.jsx (Optional - for future use)
- Reusable navigation bar
- Can be imported in any component

## Styling Features

✅ **Beautiful Colors:**
- Primary: #0a3d62, #1e5f74 (dark blue/teal)
- Secondary: #667eea, #764ba2 (purple gradient)
- Accents: Red, Yellow, Green for status badges

✅ **Responsive:**
- Mobile (< 768px)
- Tablet
- Desktop

✅ **Interactive:**
- Hover effects
- Focus states on inputs
- Loading states
- Error messages

## What You Can Now Do

✅ Login with your registered account
✅ View all requests
✅ Create new requests
✅ See request status and priority
✅ Logout

## Next Steps (Optional)

1. Add edit/delete functionality for requests
2. Add filtering by status/priority
3. Add search functionality
4. Add more user roles with different permissions
5. Add charts/analytics
6. Deploy to production

---

**Everything is styled and ready to use!** 🚀
