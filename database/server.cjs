const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');

app.use(express.static(__dirname));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

mongoose.connect('mongodb://127.0.0.1:27017/Minor_Project', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  message: String,
});

const Users = mongoose.model('data', userSchema);

const db = mongoose.connection;
db.once('open', () => {
  console.log('MongoDB connection successful');
});

app.post('/post', async (req, res) => {
  try {
    const newUser = new Users(req.body);
    await newUser.save();
    res.status(200).send('Data saved successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error saving data');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
