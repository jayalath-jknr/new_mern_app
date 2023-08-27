const task = require('../models/task');

const newTask = new task({
    title: "Buy groceries",
    description: "Go to the store and buy some essentials.",
    completed: false
});

newTask.save((err, task) => {
    if (err) return console.error(err);
    console.log("Task saved",task);
}  )
.then((task) => {
    console.log(task);
}).catch((err) => {
    console.error("Error Saving Task",err);
}   ) 
;

//controller for get all tasks
exports.getAllTasks = (req, res) => {
    task.find({}, (err, tasks) => {

        if (err) return console.error(err);
        res.send(tasks);
    });
};