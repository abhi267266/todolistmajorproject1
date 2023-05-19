const Task = require("../model/task.js");

module.exports.addTask = async(req, res) => {

  const  {taskName, category, dueDate } = req.body;

  try {
    // Create a new task document
    const newTask = new Task({
      name:taskName,
      category:category,
      dueDate:dueDate,
    });

    // Save the new task to the database
    await newTask.save();

    res.redirect('back')
  } catch (error) {
    res.status(500).json({ error: 'Error occurred while adding task' });
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