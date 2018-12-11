
document.addEventListener("DOMContentLoaded", () => {
  const task = document.querySelector('#create-task-form')
  const listOfTasks = document.querySelector('#tasks')
  task.addEventListener('submit', function (event) {
    event.preventDefault()
    // Getting the form and preventing it to post on a different page
    const newTask = event.target.querySelector('#new-task-description').value
    //Getting the value of the description inputted within the form
    const newLiTag = document.createElement('li')
    newLiTag.textContent = newTask
    listOfTasks.appendChild(newLiTag)
  })
});
