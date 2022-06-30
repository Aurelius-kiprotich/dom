let form = document.querySelector('form')
let tasks = document.querySelector('#tasks')
let deleteButtons = document.querySelectorAll('button')

const deleteTask = e => {
    let task = e.target.parentElement
    tasks.removeChild(task)
}

const addTask = e => {
    e.preventDefault()
    let task = document.createElement('div')
    task.className ='task'
    let p = document.createElement('p')
    p.textContent =document.querySelector('#new-task').value
    let button = document.createElement('button')
    button.textContent ='Delete'
    button.addEventListener('click', deleteTask)
    task.appendChild(p)
    task.appendChild(button)
    tasks.appendChild(task)
    form.reset()
}
deleteButtons.forEach(deleteButton => {
    deleteButton.addEventListener('click', deleteTask)
})

form.addEventListener('submit', addTask)