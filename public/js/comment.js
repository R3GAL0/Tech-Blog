const newBlog = async function (event) {
    event.preventDefault();
    const titleEl = document.getElementById('titleInput');
    const textEl = document.getElementById('commentInput');
    // pass the blog id as well
    await fetch('/api/blog/create', {
        method: 'POST',
        body: JSON.stringify({
            text: textEl.value.trim(),
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    document.location.replace('/dashboard')

}

// document.querySelector('#newBlogForm').addEventListener('submit', newBlog);