const Task = require('../model/task');

module.exports.delete = async(req,res)=>{
    
   try {
    const itemId = req.query.id;
    if (!itemId) {
        return res.status(400).send('Item ID is required');
    }
    const deleteItem = await Task.findByIdAndDelete(itemId);
    if(!deleteItem){
        return res.status(404).send('item not found');
    }
    return res.redirect('back');

   } catch (error) {
        res.status(500).send(`something went wrong ${error}`);
   }
}