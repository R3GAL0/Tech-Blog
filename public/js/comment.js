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

    // reload page to display new comment
    document.location.reload();
}

document.querySelector('#newCommentForm').addEventListener('submit', newBlog);