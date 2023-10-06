// const form = document
const blogID = document.getElementById('blogId');
const editBlog = async function (event) {
    event.preventDefault();
    const titleEl = document.getElementById('titleInput');
    const textEl = document.getElementById('textInput');

    await fetch(`/api/blog/${blogID.value}`, {
        method: 'PUT',
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
const deleteBlog = async function () {
    await fetch(`/api/blog/${blogID.value}`, {
        method: 'DELETE',
    })
    document.location.replace('/dashboard')
}
document.querySelector('#deleteBlog').addEventListener('click', deleteBlog);
document.querySelector('#editBlogForm').addEventListener('submit', editBlog);