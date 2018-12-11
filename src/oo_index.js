document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();

  const form = document.querySelector('#create-task-form');
  const task = document.querySelector('#tasks');


  form.addEventListener('submit',function (event) {
    event.preventDefault()

    const newTask = event.target.querySelector('#new-task-description').value
    const newLiTag = document.createElement('li')
    newLiTag.innerText = newTask

    const priority = document.querySelector('#color-dropdown')
    if (priority.value === 'high') {
      newLiTag.style.color = "red"
    }
    else if (priority.value === 'medium') {
      newLiTag.style.color = "yellow"
    }
    else {
      newLiTag.style.color = "green"
    }


    const deleteButton = document.createElement('button')
    deleteButton.addEventListener('click', function(event) {
      newLiTag.remove()
    })

    deleteButton.innerText = 'X'
    newLiTag.appendChild(deleteButton)
    task.appendChild(newLiTag)
  })
});
