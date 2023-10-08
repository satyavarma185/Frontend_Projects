const container = document.querySelector('.tasks')
const searchForm = document.querySelector('.search')

const renderTasks = async (term) => {
    let uri = 'http://localhost:3000/tasks?_sort=title&_order=desc'
    if(term){
      uri += `&q=${term}`
    }
    
    const res = await fetch(uri)
    const tasks = await res.json()
    
    let template = ''
    tasks.forEach(task => {
        template += `
          <div class="task">
             <h1>${task.title}</h1>
             <p>${task.time}</p>
             <p>${task.description.slice(0, 150)}</p>
             <a href="./details.html?id=${task.id}">read more...</a>
          </div>
        `
    })

    container.innerHTML = template

}

searchForm.addEventListener('submit', (e) => {
  e.preventDefault()

  renderTasks(searchForm.term.value.trim())
})




window.addEventListener('DOMContentLoaded', () => renderTasks())