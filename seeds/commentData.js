const {Comment} = require('../models')

const comment = [
    {
        text: "this is a comment",
        user_id: 1,
        blog_id: 1
    },
    {
        text: "this is a comment",
        user_id: 2,
        blog_id: 2
    },
    {
        text: "this is a comment",
        user_id: 3,
        blog_id: 3
    },
    {
        text: "this is a different comment",
        user_id: 3,
        blog_id: 1
    },
    {
        text: "this is a 3rd comment",
        user_id: 2,
        blog_id: 1
    },
]

const seedComments =() => Comment.bulkCreate(comment);

module.exports = seedComments;