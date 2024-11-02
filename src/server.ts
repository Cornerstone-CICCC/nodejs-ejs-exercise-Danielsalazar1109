import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import pageRoutes from './routes/page.routes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../src/views'));

// Serve static files
app.use(express.static(path.join(__dirname, '../dist/public')));

// Routes
app.use('/', pageRoutes);


// Start the server
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));