const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// Mock api created instead of json-server since it was generating errors for update and search 
const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Sample data (in-memory database)
let users = [
    { "id": 1, "name": "Jane Doe", "email": "jane@example.com", "phone": "123-456-7890" },
    { "id": 2, "name": "David Smith", "email": "david@example.com", "phone": "123-456-7891" },
    { "id": 3, "name": "Jake Johnson", "email": "jake@example.com", "phone": "123-456-7892" },
    { "id": 4, "name": "James Miller", "email": "james@example.com", "phone": "123-456-7893" },
    { "id": 5, "name": "Janet Jackson", "email": "janet@example.com", "phone": "123-456-7894" },
    { "id": 6, "name": "Samuel Green", "email": "samuel@example.com", "phone": "123-456-7895" },
    { "id": 7, "name": "Alice Doe", "email": "alice@example.com", "phone": "123-456-7896" },
    { "id": 8, "name": "David Brown", "email": "davidb@example.com", "phone": "123-456-7897" },
    { "id": 9, "name": "John Doe", "email": "john@example.com", "phone": "123-456-7898" },
    { "id": 10, "name": "Jane Smith", "email": "janesmith@example.com", "phone": "123-456-7899" },
    { "id": 11, "name": "Jake Brown", "email": "jakeb@example.com", "phone": "123-456-7890" }
];

// Helper function to generate unique IDs
const generateId = () => {
  return users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 1;
};

// GET all users with optional filtering and pagination
app.get('/users', (req, res) => {
  let filteredUsers = users;

  // Filtering by name (case-insensitive)
  if (req.query.name_like) {
    const nameLike = req.query.name_like.toLowerCase();
    filteredUsers = filteredUsers.filter(user =>
      user.name.toLowerCase().includes(nameLike)
    );
  }

  // Pagination support
  const _page = parseInt(req.query._page) || 1;
  const _limit = parseInt(req.query._limit) || 10;
  const start = (_page - 1) * _limit;
  const end = start + _limit;

  const paginatedUsers = filteredUsers.slice(start, end);
  
  res.json(paginatedUsers);
});

// GET a single user by ID
app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(user => user.id === userId);
  
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  res.json(user);
});

// POST a new user
app.post('/users', (req, res) => {
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const newUser = { id: generateId(), name, email, phone };
  users.push(newUser);
  
  res.status(201).json(newUser);
});

// PUT to update an existing user by ID
app.put('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const { name, email, phone } = req.body;

  const userIndex = users.findIndex(user => user.id === userId);

  if (userIndex === -1) {
    return res.status(404).json({ message: 'User not found' });
  }

  users[userIndex] = { id: userId, name, email, phone };
  res.json(users[userIndex]);
});

// DELETE a user by ID
app.delete('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex(user => user.id === userId);

  if (userIndex === -1) {
    return res.status(404).json({ message: 'User not found' });
  }

  users.splice(userIndex, 1);
  res.status(204).end();
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});