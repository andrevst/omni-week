const express = require('express');
const mongoose = require('mongoose');

const app = express ();

mongoose.connect(
    "mongodb+srv://omni-user:admin182@cluster0-orohr.mongodb.net/test?retryWrites=true",
    // need a secure way to save it
    {
         useNewUrlParser: true
    }
);

app.use(express.json());
app.use(require('./routes'));

app.listen(3000,  () => {
    console.log('app started on port 3000');
});


