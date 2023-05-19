const Task = require("../model/task.js");

module.exports.home = async (req, res) =>{
    try {
        const task = await Task.find({}).exec();
        return res.render('todo_list_home',{task:task});
    } catch (error) {
        console.log(error);
        return res.status(500).send('error while retriving taks');
    }
}