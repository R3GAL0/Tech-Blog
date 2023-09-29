const {Blog} = require('../models')

const newBlog = [
    {
        title: "sfds",
        text: "this is a blog",
        user_id: 1
    },
    {
        title: "title 2",
        text: "this is a blog",
        user_id: 1
    },
    {
        title: "title 3",
        text: "this is a blog",
        user_id: 1
    },
    {
        title: "title 4",
        text: "this is a blog",
        user_id: 1
    }
]

const seedBlogs =() => Blog.bulkCreate(newBlog);

module.exports = seedBlogs;