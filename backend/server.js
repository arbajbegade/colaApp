const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors middleware

// Configure Express to parse JSON data
app.use(bodyParser.json());

// Enable CORS for all routes
app.use(cors());

let data = [];

// app.get('/', (req, res) => {
//   res.status(200).json(data);
// });

app.post('/', (req, res) => {
  const formData = req.body;
  data = [formData];

  // You can add validation and error handling as needed
  console.log(formData)
  res.status(200).json({ message: 'Data saved successfully' });
});
app.get('/table', (req, res) => {
  res.status(200).json(data);
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
  
});
