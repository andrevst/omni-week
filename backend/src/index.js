const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express ();

const server = require('http').Server(app);

const io = require('socket.io') (server);

mongoose.connect(
    "mongodb+srv://omni-user:admin182@cluster0-orohr.mongodb.net/test?retryWrites=true",
    // need a secure way to save it
    {
         useNewUrlParser: true
    }
);

app.use((req, res, next) => {
    req.io = io;

    return next();
});

app.use(cors());
app.use(express.json());
app.use(require('./routes'));

server.listen(3000,  () => {
    console.log('app started on port 3000');
});


