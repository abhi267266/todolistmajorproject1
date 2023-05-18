module.exports.addTask = (req, res) => {
  const taskName = req.body.taskName;
  const category = req.body.category;
  const dueDate = req.body.dueDate;

  // Process the form data as needed

  console.log(taskName, category, dueDate);

  res.redirect('back');
}