const express = require('express');
const { connectDB } = require('./connect');
const urlRoute = require('./routes/url');
const app = express();
const PORT = process.env.PORT || 3000;

connectDB('mongodb://localhost:27017/url-shortener');

app.use(express.json());
app.use('/', urlRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});