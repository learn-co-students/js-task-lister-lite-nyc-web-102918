
document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();
  
  const colors = ['red', 'green', 'yellow']
  //find the form in the site
  let form = document.querySelector("#create-task-form")
  
  // find the ul on the site
  let ul = document.querySelector("#tasks")

  let dropdown = document.createElement("select");

  form.appendChild(dropdown)

  // How do we iterate through this so its less code. 
  let red = document.createElement('option');
  red.value = "red"
  red.innerHTML = "red"
  dropdown.appendChild(red)
  let yellow = document.createElement('option');
  yellow.value = "yellow"
  yellow.innerHTML= "yellow"
  dropdown.appendChild(yellow)
  let green = document.createElement('option');
  green.value = "green"
  green.innerHTML = "green"
  dropdown.appendChild(green)



// when you click the submit button
  form.addEventListener('submit', (event)=> {
    //do not refresh the page
    event.preventDefault();
    // grab the input's value from the form
    let input = event.target.querySelector('#new-task-description').value
    //create a list item
    let li = document.createElement('li')
    // add the innerHTML in the input
    li.innerHTML  =  input

    //added a dropdown section and added color
    i = dropdown.options.selectedIndex
    color = dropdown.options[i].textContent
    li.id = i
    li.style.color = color

    // Added a remove button 
    let button = document.createElement('button')
    button.innerHTML = 'X'

    // append the list item on the ul
    ul.appendChild(li)
    li.appendChild(button)

    //sort the tasks

    let sorted= [...ul.querySelectorAll('li')]
    sorted = sorted.sort((a,b) => parseInt(a.id) - parseInt(b.id))
    console.log(sorted[0])
    // for (let i = 0; i < sorted.length; i++){
    //     ul.children[i].replaceWith(sorted[i])
    // }
  });

  //choose color



  // delete button
  ul.addEventListener('click', (event) => {
      let x = event.target.textContent
      // if  X
      if(x == 'X'){
        // remove function
        event.target.closest('li').remove()
      }
  })


});
