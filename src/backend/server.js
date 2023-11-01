const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const cors = require('cors');
const app = express();

const url = 'mongodb+srv://revathip21it:rev-58%4024@cluster0.g6vgw7c.mongodb.net/banksignup';

app.use(bodyParser.json());
app.use(cors());

let client;

async function connectToDatabase() {
  try {
    client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to database');
  } catch (error) {
    console.error('Error connecting to database:', error);
    process.exit(1);
  }
}

connectToDatabase();

app.post('/api/users', async (req, res) => {
  const userData = req.body;
  console.log('Received User ID:', userData);

  try {
    const db = client.db('Jobsignup');
    const Signup = db.collection('Signup');

    const existingUser = await Signup.findOne({ userID: userData.userID });

    if (existingUser) {
      return res.status(200).json({ message: 'Welcome back! Let\'s explore new things at Equinox...' });
    }

    res.status(401).json({ message: 'User ID does not exist. Please sign up.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
//signup
app.post('/api/signup', async (req, res) => {
  const userData = req.body;
 // console.log('Received User ID:', userData);

  try {
    const db = client.db('Jobsignup');
    const Signup = db.collection('Signup');
    const existingUser = await Signup.findOne({ userID: userData.userID, email: userData.email, password: userData.password });

    
    if (existingUser) {
      return res.status(400).json({ message: 'User details already exists' });
    }
    const newUser = new Signup(userData); //coll
    await newUser.save();

    res.status(201).json({ message: 'Let explore new things at Equinox...' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

//accserver
app.post('/api/post', async (req, res) => {
  const userData = req.body;

  try {
    const db = client.db('Jobsignup');
    const  Post = db.collection('Post');
    const existingUser = await Post.findOne({ customId: userData.customId });

    if (existingUser) {
      return res.status(400).json({ message: 'User with customId already exists' });
    }
    const newUser = new Acopen(userData); //coll
    await newUser.save();

    res.status(201).json({ message: 'User data saved successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
//loan1
app.post('/api/loan1', async (req, res) => {
  const userData = req.body;

  try {
    const db = client.db('banksignup');
    const  Consumerloan = db.collection('Consumerloan');
    const existingUser = await Consumerloan.findOne({ savingAccountNumber: userData.savingAccountNumber });

    if (existingUser) {
      return res.status(400).json({ message: 'User with saving account# already exists' });
    }
    const newUser = new Consumerloan(userData); //coll
    await newUser.save();

    res.status(201).json({ message: 'Your loan application submitted successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

//loan2
app.post('/api/loan2', async (req, res) => {
  const userData = req.body;


  try {
    const db = client.db('banksignup');
    const  Homeloan = db.collection('Homeloan');
    const existingUser = await Homeloan.findOne({ savingAccountNumber: userData.savingAccountNumber });

    if (existingUser) {
      return res.status(400).json({ message: 'User with Saving account# already exists' });
    }
    const newUser = new Homeloan(userData); //coll
    await newUser.save();

    res.status(201).json({ message: 'Your loan application submitted successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
//loan3
app.post('/api/loan3', async (req, res) => {
  const userData = req.body;

  try {
    const db = client.db('banksignup');
    const   Mortgageloan= db.collection('Mortgageloan');
    const existingUser = await Mortgageloan.findOne({ savingAccountNumber: userData.savingAccountNumber });

    if (existingUser) {
      return res.status(400).json({ message: 'User with saving account# already exists' });
    }
    const newUser = new Mortgageloan(userData); //coll
    await newUser.save();

    res.status(201).json({ message: 'Your loan application submitted successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
//loan4
app.post('/api/loan4', async (req, res) => {
  const userData = req.body;

  try {
    const db = client.db('banksignup');
    const  Autoloan= db.collection('Autoloan');
    const existingUser = await Autoloan.findOne({ Accnumber: userData.Accnumber });

    if (existingUser) {
      return res.status(400).json({ message: 'User with saving account# already exists' });
    }
    const newUser = new Autoloan(userData); //coll
    await newUser.save();

    res.status(201).json({ message: 'Your loan application submitted successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});