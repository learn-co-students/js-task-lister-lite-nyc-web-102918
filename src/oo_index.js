
document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();

  const form = document.querySelector('#create-task-form')


  form.addEventListener('submit', function newTaskHandler(event) {
    event.preventDefault()

    const tasks = document.querySelector('#tasks')

    const resetButton = document.createElement('button')

    const newTask = event.target.querySelector('#new-task-description').value

    const newLiTag = document.createElement('li')

    newLiTag.textContent = newTask
    tasks.appendChild(newLiTag)
    newLiTag.appendChild(resetButton)

    resetButton.addEventListener('click', function deleteTask(event) {
      newLiTag.remove()
    })


  })
});
