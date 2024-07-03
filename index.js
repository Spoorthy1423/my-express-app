const express = require('express');
const app = express();

// Middleware functions
function middleware(req, res, next) {
    console.log('Logging...');
    next();
}

function logger(req, res, next) {
    console.log('Method:', req.method);
    console.log('Hostname:', req.hostname);
    console.log('IP:', req.ip);
    console.log('Date:', new Date().toISOString());
    next();
}

// Sample data
let courses = [
    { id: 1, name: 'Node.js' },
    { id: 2, name: 'React.js' },
    { id: 3, name: 'Angular.js' }
];

// Middleware setup
app.use(middleware); // Custom middleware for logging
app.use(logger); // Custom middleware for logging request details
app.use(express.json()); // Middleware to parse JSON request bodies

// Routes
app.get('/courses', (req, res) => {
    res.json(courses);
});

app.post('/courses', (req, res) => {
    console.log(req.body); // Logs the JSON data sent in the POST request body
    // Typically, you would process this data and send an appropriate response
    res.send('Course added successfully');
});

app.put('/courses/:id', (req, res) => {
    const courseId = req.params.id;
    console.log(`Updating course with ID ${courseId}`);
    console.log(req.body); // Logs the JSON data sent in the PUT request body
    // Update the course with the provided ID
    res.send(`Course with ID ${courseId} updated successfully`);
});

app.delete('/courses/:id', (req, res) => {
    const courseId = req.params.id;
    console.log(`Deleting course with ID ${courseId}`);
    // Delete the course with the provided ID
    res.send(`Course with ID ${courseId} deleted successfully`);
});

// Start the server
app.listen(3000, () => {
    console.log('Server is listening on port 3000...');
});
