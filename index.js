const express = require('express');
const numberController = require('./controllers/numberController');
const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/input', numberController.processNumber);
app.get('/numbers', numberController.listNumbers);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
