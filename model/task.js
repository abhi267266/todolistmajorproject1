const mongoose = require('mongoose');
const min_date = require('../asset/js/current_date');


const taskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },

    category:{
        type:String,
        required:true
    }
    ,
    dueDate:{
        type:Date,
        min: min_date,
        required:true
    }
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;


