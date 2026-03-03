// Do not make any change in this code template
 
let tasks = [];
 
/**
* Adds a task to the tasks array.
* Validates that the input is a non-empty string.
*/
function addTask(task) {
  // Check if task is not a string or is an empty string
  if (typeof task !== 'string' || task.trim() === "") {
    throw new Error("Invalid task: Task must be a non-empty string");
  }
  tasks.push(task);
  return "Task added: " + task;
}
 
/**
* Removes a specific task from the tasks array.
* Throws an error if the task is not found.
*/
function removeTask(task) {
  const index = tasks.indexOf(task);
  // If task is not found in the array
  if (index === -1) {
    throw new Error("Task not found.");
  }
  tasks.splice(index, 1);
  return "Task removed: " + task;
}
 
/**
* Lists all tasks in the tasks array.
* Throws an error if the array is empty.
*/
function listTasks() {
  // Check if no tasks are available
  if (tasks.length === 0) {
    throw new Error("No tasks available.");
  }
  return tasks;
}
 
// Global error handling block using try-catch
try {
  console.log(addTask('Complete homework'));
  console.log(addTask('Go grocery shopping'));
  console.log('Task List:', listTasks());
  console.log(removeTask('Go grocery shopping'));
  console.log('Task List:', listTasks());
  console.log(removeTask('Visit the doctor'));
} catch (error) {
  // Handles exceptions thrown by the functions
  console.log(error.message);
} finally {
  // Always executes regardless of an error
  console.log('Task management operation completed.');
}
 
module.exports = {
  addTask,
  removeTask,
  listTasks,
  tasks
};