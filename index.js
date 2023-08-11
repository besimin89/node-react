const express = require('express');
const app = express();

app.get('/', (req, res)=> {
    req.send({ hi: 'Besimin' });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT);