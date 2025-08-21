# ChatHub - A Discord Clone

A real-time chat application inspired by Discord, built with MERN stack (MongoDB, Express.js, React.js, Node.js) and Socket.io.

## Screenshot

![Discord Clone Screenshot](screenshot/Screenshot%20(181).png)

## Features

- User authentication (Register/Login)
- Real-time messaging
- Servers and channels
- User presence
- Responsive design

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or Atlas)

## Installation

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd discord-clone
   ```

2. Install backend dependencies
   ```bash
   cd backend
   npm install
   ```

3. Install frontend dependencies
   ```bash
   cd ../frontend
   npm install
   ```

4. Set up environment variables
   - Create a `.env` file in the `backend` directory (see `.env.example`)
   - Configure your MongoDB URI and JWT secret

## Running the Application

1. Start the backend server
   ```bash
   cd backend
   npm run dev
   ```

2. In a new terminal, start the frontend
   ```bash
   cd frontend
   npm start
   ```

3. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
discord-clone/
├── backend/               # Backend server
│   ├── config/           # Configuration files
│   ├── controllers/      # Route controllers
│   ├── middleware/       # Custom middleware
│   ├── models/           # Mongoose models
│   ├── routes/           # API routes
│   ├── server.js         # Main server file
│   └── .env              # Environment variables
│
└── frontend/             # Frontend React app
    ├── public/           # Static files
    └── src/
        ├── components/   # React components
        ├── context/      # React context
        ├── pages/        # Page components
        ├── App.js        # Main App component
        └── index.js      # Entry point
```

## Technologies Used

- **Frontend:** React.js, React Router, Axios, Socket.io-client
- **Backend:** Node.js, Express.js, Socket.io
- **Database:** MongoDB with Mongoose
- **Authentication:** JWT (JSON Web Tokens)
- **Styling:** CSS Modules

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by Discord
- Built with MERN stack
