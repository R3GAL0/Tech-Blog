const newBlog = async function (event) {
    event.preventDefault();
    const textEl = document.getElementById('commentInput');
    // pass text, user_id, blog_id
    await fetch(`/api/blog/comment`, {
        method: 'POST',
        body: JSON.stringify({
            text: textEl.value.trim(),
            blog: document.getElementById('blogID').textContent,
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    // reload page
    document.location.reload();
    // replace location with single blog view for current blog
    // aka reload the page
    // document.location.replace('/dashboard')

}

document.querySelector('#newCommentForm').addEventListener('submit', newBlog);