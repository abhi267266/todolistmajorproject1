const express = require('express');
const router = express.Router();

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

const homeController = require('../controller/home_controller');
const addTaskController = require('../controller/addTask_controller');



router.get('/', homeController.home);
router.use('/add-task', addTaskController.addTask);


module.exports = router;