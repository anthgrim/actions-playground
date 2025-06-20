const express = require('express');
const router = express.Router();

// Sample data (in a real app, this would come from a database)
let users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
];

// GET /api/users - Get all users
router.get('/users', (req, res) => {
  res.json({
    success: true,
    data: users,
    count: users.length
  });
});

// GET /api/users/:id - Get a specific user
router.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(u => u.id === userId);
  
  if (!user) {
    return res.status(404).json({
      success: false,
      message: 'User not found'
    });
  }
  
  res.json({
    success: true,
    data: user
  });
});

// POST /api/users - Create a new user
router.post('/users', (req, res) => {
  const { name, email } = req.body;
  
  // Basic validation
  if (!name || !email) {
    return res.status(400).json({
      success: false,
      message: 'Name and email are required'
    });
  }
  
  const newUser = {
    id: users.length + 1,
    name,
    email
  };
  
  users.push(newUser);
  
  res.status(201).json({
    success: true,
    message: 'User created successfully',
    data: newUser
  });
});

// PUT /api/users/:id - Update a user
router.put('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex(u => u.id === userId);
  
  if (userIndex === -1) {
    return res.status(404).json({
      success: false,
      message: 'User not found'
    });
  }
  
  const { name, email } = req.body;
  
  if (name) users[userIndex].name = name;
  if (email) users[userIndex].email = email;
  
  res.json({
    success: true,
    message: 'User updated successfully',
    data: users[userIndex]
  });
});

// DELETE /api/users/:id - Delete a user
router.delete('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex(u => u.id === userId);
  
  if (userIndex === -1) {
    return res.status(404).json({
      success: false,
      message: 'User not found'
    });
  }
  
  users.splice(userIndex, 1);
  
  res.json({
    success: true,
    message: 'User deleted successfully'
  });
});

module.exports = router;
