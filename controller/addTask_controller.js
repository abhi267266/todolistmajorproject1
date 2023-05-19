const Task = require("../model/task.js");
const currDate = require('../asset/js/current_date.js');

module.exports.addTask = async(req, res) => {

  const  {taskName, category, dueDate } = req.body;

  try {
    // Create a new task document
    const newTask = new Task({
      name:taskName,
      category:category,
      dueDate:dueDate,
    });

    //checks date
    

    // Save the new task to the database
    await newTask.save();

    res.redirect('back')
  } catch (error) {
    if(dueDate < currDate){
      console.log("This is an alert message!");
      return res.redirect('back');
    }else{
      res.status(500).json({ error: 'Error occurred while adding task' });
    }
  }
}
// try {
//   // Extract name and phone from the request body
//   const { name, phone } = req.body;

//   // Create a new contact document
//   const newContact = new Contact({
//       name: name,
//       phone: phone
//   });

//   // Save the new contact to the database
//   await newContact.save();
//   res.redirect('back');
// } catch (error) {
//   console.error(error);
//   res.status(500).send('Error saving item');
// }