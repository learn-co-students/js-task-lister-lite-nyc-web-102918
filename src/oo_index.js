document.addEventListener("DOMContentLoaded", () => {

  const form = document.querySelector('#create-task-form');
  const taskList = document.querySelector('#tasks');

  form.addEventListener('submit', function inputHandler(event) {
    event.preventDefault()

  const newTask = event.target.querySelector('#new-task-description').value

  const newLi = document.createElement('li')
  newLi.textContent = newTask;
  console.log(newLi);

  const deleteButton = document.createElement('button')
  deleteButton.type = 'button'
  deleteButton.innerText = '🤔 ummmmmmmm delete 🙄'
  console.log(deleteButton);
  newLi.appendChild(deleteButton)

  taskList.appendChild(newLi);
  event.target.reset();

  deleteButton.addEventListener('click', function deleteItem(event) {
    newLi.remove();
    })
  })
 });
