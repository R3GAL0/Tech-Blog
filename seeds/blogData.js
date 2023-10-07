const {Blog} = require('../models')

const newBlog = [
    {
        title: "sfds",
        text: "this is a blog",
        user_id: 1,
        dateCreated: '2012-10-12'
    },
    {
        title: "title 2",
        text: "this is a blog",
        user_id: 1,
        dateCreated: '2012-10-13'
    },
    {
        title: "title 3",
        text: "this is a blog",
        user_id: 2,
        dateCreated: '2012-10-14'
    },
    {
        title: "title 4",
        text: "this is a blog",
        user_id: 2,
        dateCreated: '2012-10-15'
    }
]

const seedBlogs =() => Blog.bulkCreate(newBlog);

module.exports = seedBlogs;