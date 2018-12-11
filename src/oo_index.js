document.addEventListener("DOMContentLoaded", () => {
  // const taskList = new TaskList();
  const form = document.querySelector("#create-task-form")
  const input = document.querySelector("#new-task-description")
  const priority = document.querySelector("#priority")
  const tasks =  document.querySelector("#tasks")

  form.addEventListener("submit", function taskHandler(event) {
    event.preventDefault()
    const newItem = document.createElement("li")
    newItem.innerText = input.value


    switch (priority.value) {
      case "low":
        newItem.classList.add("low")
        newItem.setAttribute("data-priority", "3")
        break
      case "medium":
        newItem.classList.add("medium")
        newItem.setAttribute("data-priority", "2")
        break
      case "high":
        newItem.classList.add("high")
        newItem.setAttribute("data-priority", "1")
        break
    }

    const deleteBtn = document.createElement("button")
    deleteBtn.classList.add("delete");
    deleteBtn.innerText = "Delete"
    // newItem.appendChild(deleteBtn)
    newItem.insertAdjacentElement('beforeend', deleteBtn);
    tasks.appendChild(newItem)

    form.reset()

    const allItems = document.getElementsByTagName("li")
    const allItemsArray = Array.from(allItems)
    allItemsArray.sort(function(a,b) {
      return a.dataset.priority - b.dataset.priority
    })

    tasks.innerHTML = ""

    for (let i = 0; i < allItemsArray.length; i++ ) {
      tasks.appendChild(allItemsArray[i])
    }
  })

  tasks.addEventListener("click", function deleteHandler(event) {
    if (event.target.className === "delete"){
      event.target.parentNode.remove()
    }
  })



});
