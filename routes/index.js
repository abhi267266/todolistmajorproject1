const express = require('express');
const router = express.Router();

router.use(express.urlencoded({ extended: true }));
router.use(express.json());


const homeController = require('../controller/home_controller');
const addTaskController = require('../controller/addTask_controller');
const deleteTaskController = require('../controller/deleteTask_controller');



router.get('/', homeController.home);
router.post('/add-task', addTaskController.addTask);
router.get('/delete',deleteTaskController.delete);


module.exports = router;