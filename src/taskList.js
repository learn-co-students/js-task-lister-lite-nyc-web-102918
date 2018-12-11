document.addEventListener('DOMContentLoaded', function domContentHandler() {
  console.log('WHAT IS THE FORM? ', document.querySelector('#comment-form'))
  console.log('%c Hello lol', 'color:goldenrod')

  const form = document.querySelector('#create-task-form')

    form.addEventListener('submit', function newTaskHandler(event){
    event.preventDefault()


    const newTask = document.querySelector('#new-task-description').value

    const newLiTag = document.createElement('li')

    newLiTag.innerText = newTask

    const container = document.querySelector('#list')

    const button = document.createElement('button')

    button.innerText = 'X'

    button.addEventListener('click', function(event){
      newLiTag.remove()
    } )

    container.appendChild(newLiTag)
    newLiTag.appendChild(button)
    event.target.reset()



  })



})

class TaskList {


}
