
# Grocery Web Application (MERN Stack)

A full-featured grocery web application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). This application allows users to browse, add to cart, and purchase grocery items seamlessly.

## Features
- User authentication (Sign Up, Login, Logout)
- Add, view, and manage grocery items
- Shopping cart functionality
- Secure checkout process
- Admin panel to manage products and orders
- Responsive design for seamless usage on any device

## Tech Stack
- **Frontend:** React.js, Redux (for state management), CSS/Bootstrap
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose ODM)
- **Authentication:** JSON Web Tokens (JWT) with bcrypt
- **Hosting:** TBD (can use platforms like Heroku, Vercel, or Netlify)

---

## Installation and Setup

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [MongoDB](https://www.mongodb.com/) (local or cloud instance)
- [Git](https://git-scm.com/)

### Clone the Repository
```bash
git clone https://github.com/Bharath136/Grocery-Web-App-MERN.git
cd Grocery-Web-App-MERN
```

### Backend Setup
1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `backend` directory and configure the following:
   ```
   MONGO_URI=<Your MongoDB Connection String>
   JWT_SECRET=<Your JWT Secret>
   PORT=<Port Number, default: 5000>
   ```
4. Start the server:
   ```bash
   npm run dev
   ```

### Frontend Setup
1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

The application should now be running on [http://localhost:3000](http://localhost:3000) with the backend server at [http://localhost:5000](http://localhost:5000).

---

## Project Structure

```
Grocery-Web-App-MERN/
│
├── backend/         # Backend code (Node.js, Express)
│   ├── models/      # Mongoose models
│   ├── routes/      # API routes
│   ├── controllers/ # Route logic
│   └── server.js    # Entry point for the backend
│
├── frontend/        # Frontend code (React.js)
│   ├── src/
│   │   ├── components/  # Reusable React components
│   │   ├── pages/       # Page-specific components
│   │   ├── redux/       # Redux store and slices
│   │   └── App.js       # Main App component
│
└── README.md        # Project documentation
```

---

## Scripts

### Backend
- `npm run dev`: Starts the backend server in development mode.
- `npm start`: Starts the backend server in production mode.

### Frontend
- `npm start`: Starts the React development server.

---

## Contribution
Contributions are welcome! Please fork this repository and submit a pull request for any changes.

---

## License
This project is licensed under the MIT License. See the `LICENSE` file for more details.

---

## Contact
For any questions or support, reach out to:
- **Author:** Bharath
- **GitHub:** [Bharath136](https://github.com/Bharath136)
