const express = require('express'); // Import Express.js
const app = express(); // Create an Express application

let courses = [
    { id: 1, name: 'Node.js' },
    { id: 2, name: 'React.js' },
    { id: 3, name: 'Angular.js' }
];

app.get('/courses', (req, res) => {
    res.json(courses);
});

app.listen(3000, () => console.log('Listening on port 3000...'));
