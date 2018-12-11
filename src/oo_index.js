
document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();

  const form=document.querySelector('#create-task-form');
  const task=document.querySelector('#tasks');

  form.addEventListener('submit',function (event){

  event.preventDefault()
  const  newTask = event.target.querySelector('#new-task-description').value
  //console.log(newTask)

  const newLiTag = document.createElement('li')
  newLiTag.innerText= newTask

  task.appendChild(newLiTag)
  }

)});
