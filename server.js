// importing express js
const express = require('express');
//port settings
const PORT = process.env.PORT || 3001;
const app = express();

//express middleware
app.use(express.urlencoded({extended: false }));
app.use(express.json());

//test get route
app.get('/', (req, res) => {
    res.json({
        message: 'Hello World'
    });
});
//Default response for any other request( not found) catch all 
app.use((req, res) => {
    res.status(404).end();
})

//start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});