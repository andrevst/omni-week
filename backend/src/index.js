const express = require('express');
const mongoose = require('mongoose');

const app = express ();

mongoose.connect(
    "mongodb+srv://omni-user:admin182@cluster0-orohr.mongodb.net/test?retryWrites=true",
    // {
    //     // useNewUrlParser: true
    // }
);

app.get('/',  (req, res) => {
    return res.send('hello world');
});

app.listen(3000,  () => {
    console.log('app started on port 3000');
});


