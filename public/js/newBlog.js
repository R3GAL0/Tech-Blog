const newBlog = async function (event) {
    event.preventDefault();
    const titleEl = document.getElementById('titleInput');
    const textEl = document.getElementById('textInput');
    await fetch('/api/blog/create', {
        method: 'POST',
        body: JSON.stringify({
            title: titleEl.value.trim(),
            text: textEl.value.trim(),
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    document.location.replace('/dashboard')

}

document.querySelector('#newBlogForm').addEventListener('submit', newBlog);