const express = require ('express');
const app = express();
const port = 3000;

// Servce static files from the "public" folder
app.use(express.static('public'));

// Define a route for the home page
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start the server
app.listen(port, () => {
    console.log('Server running at http://localhost:${port}');
});