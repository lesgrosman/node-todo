const { Router } = require('express')
const todo = require('../models/todo')
const router = Router()

// Getting task list
router.get('/', async (req, res) => {
  try {
    const todos = await todo.findAll()
    res.status(200).json(todos)
  } catch (e) {
    console.log(e)
    res.status(500).json({
      message: 'Server error'
    })
  }
})

// Create new task 
router.post('/',  async (req, res) => {
  try {
    const todoItem =  await todo.create({
      title: req.body.title,
      done: false
    })
    return res.status(201).json(todoItem)
  } catch (e) {
    console.log(e)
    res.status(500).json({
      message: 'Server error'
    })
  }
})

// Change excisting task by ID 
router.put('/:id', (req, res) => {
  try {

  } catch (e) {
    console.log(e)
    res.status(500).json({
      message: 'Server error'
    })
  }
})

// Delete task
router.delete('/:id', (req, res) => {
  try {

  } catch (e) {
    console.log(e)
    res.status(500).json({
      message: 'Server error'
    })
  }
})

module.exports = router