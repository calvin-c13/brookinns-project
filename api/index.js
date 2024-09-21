import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import reviewRouter from './routes/review.route.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Logging middleware
app.use((req, res, next) => {
  console.log(`Received request: ${req.method} ${req.url}`);
  next();
});

// Database connection
mongoose.connect(process.env.MONGO)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.log('MongoDB connection error:', err);
    });

// Routes
app.use('/api/reviews', reviewRouter);

// Catch-all route for undefined routes
app.use('*', (req, res) => {
  console.log(`404 - Route not found: ${req.method} ${req.url}`);
  res.status(404).json({ message: 'Route not found' });
});

// Error handling middleware
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    console.error(`Error: ${statusCode} - ${message}`);
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});

// Start server
const port = process.env.PORT || 5175;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});