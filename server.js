// importing express js
const express = require('express');
//importing database
const db = require('./db/database');

//port settings
const PORT = process.env.PORT || 3001;
const app = express();

//importing apiRoutes index.js
const apiRoutes = require('./routes/apiRoutes');

//express middleware
app.use(express.urlencoded({extended: false }));
app.use(express.json());

//setting up /api to go to apiRoutes
app.use('/api', apiRoutes);

/*test get route
app.get('/', (req, res) => {
    res.json({
        message: 'Hello World'
    });
});*/

//Default response for any other request( not found) catch all 
app.use((req, res) => {
    res.status(404).end();
})

//start server
db.on('open',() =>{
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  });
});