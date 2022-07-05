const express = require("express");
const router = express.Router();
const {getAllTasks, CreateTask,GetSingleTask,UpdateTask,DeleteTask} = require('../controllers/tasks')


router.route('/').get(getAllTasks).post(CreateTask)
router.route('/:id').get(GetSingleTask).patch(UpdateTask).delete(DeleteTask)

module.exports = router;