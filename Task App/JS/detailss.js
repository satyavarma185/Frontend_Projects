const id = new URLSearchParams(window.location.search).get('id')
const detailsContainer = document.querySelector('.details')
const deleteBtn = document.querySelector('.deleteBtn')

const renderDetails = async () => {
    const res = await fetch('http://localhost:3000/tasks/' + id)
    const task = await res.json();
    
    const template = `
      <h1> ${task.title}</h1>
      <p>${task.description}</p>
    `

    detailsContainer.innerHTML = template
}

deleteBtn.addEventListener('click', async (e) => {
   const res = await fetch('http://localhost:3000/tasks/' +id, {
      method: 'DELETE'
   })
   window.location.replace('./index.html')
})



window.addEventListener('DOMContentLoaded', () => renderDetails())