const express = require('express');


const db = require('../connection');
const authenticateUser=require("../middlewares/currentUser")
const router = express.Router();

// Create a new task
router.post('/create', authenticateUser, async (req, res) => {
  const { title, description, dueDate } = req.body;
  const userId = req.userId; // Access the current user's information from the middleware

  try {
    // Insert the new task into the database
    await db.none('INSERT INTO tasks (title, description, due_date, user_id) VALUES ($1, $2, $3, $4)',
      [title, description, dueDate, userId]);

    res.status(201).json({ message: 'Task created successfully.' });
  } catch (error) {
    console.error('Error creating task:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

router.get('/getoneTask/:taskId', authenticateUser, async (req, res) => {
    const taskId = req.params.taskId;
   // const userId = req.userId;
  
    try {
      // Check if the task belongs to the current user
      const task = await db.oneOrNone('SELECT * FROM tasks WHERE id = $1', [taskId]);
  
      if (!task) {
        return res.status(404).json({ message: 'Task not found' });
      }
  
      res.json({ task });
    } catch (error) {
      console.error('Error fetching task:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });

  router.put('/update/:taskId', authenticateUser, async (req, res) => {
    const taskId = req.params.taskId;
    const userId = req.userId;
    const { title, description, dueDate } = req.body;
  
    try {
      // Check if the task belongs to the current user
      const existingTask = await db.oneOrNone('SELECT * FROM tasks WHERE id = $1', [taskId, userId]);
  
      if (!existingTask) {
        return res.status(404).json({ message: 'Task not found' });
      }
  
      // Update the task
      await db.none('UPDATE tasks SET title = $1, description = $2, due_date = $3 WHERE id = $4', [title, description, dueDate, taskId]);
  
      res.json({ message: 'Task updated successfully' });
    } catch (error) {
      console.error('Error updating task:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });


  router.delete('/delete/:taskId', authenticateUser, async (req, res) => {
    const taskId = req.params.taskId;
    const userId = req.userId;
  
    try {
      // Check if the task belongs to the current user
      const existingTask = await db.oneOrNone('SELECT * FROM tasks WHERE id = $1', [taskId, userId]);
  
      if (!existingTask) {
        return res.status(404).json({ message: 'Task not found' });
      }
  
      // Delete the task
      await db.none('DELETE FROM tasks WHERE id = $1', [taskId]);
  
      res.json({ message: 'Task deleted successfully' });
    } catch (error) {
      console.error('Error deleting task:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });
  

module.exports=router;
