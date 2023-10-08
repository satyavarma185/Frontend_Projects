const form = document.querySelector('form')

const createPost = async (e) => {
    e.preventDefault()

    const doc = {
        title: form.title.value,
        time: form.time.value,
        description: form.description.value
    }

    await fetch('http://localhost:3000/tasks', {
        method: 'POST',
        body: JSON.stringify(doc),
        headers:{ 'Content-Type': 'application/json' }
    })

    window.location.replace('./index.html')
} 

form.addEventListener('submit', createPost)