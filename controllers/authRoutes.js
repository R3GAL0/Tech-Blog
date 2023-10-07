const router = require('express').Router();
const {User, Blog, Comment} = require('./../models');
const withAuth = require('../utils/auth.js');

// view your own published blogs
router.get('/', withAuth, async (req, res) => {
    try {
        const blogData = await Blog.findAll({
            where: {
                user_id: req.session.user_id,
            }
        })
        const blogs = blogData.map((blog) => {
            return blog.get({ plain: true })
        });
        res.render('homeAdmin', {
            layout: 'dashboard', 
            blogs
        })
    } catch (err) {
        res.redirect('/login');
    }
})

// edit blog route
router.get('/edit/:id', withAuth, async (req, res) => {
    try {
        const blogData = await Blog.findByPk(req.params.id);
        if (blogData) {
            const blog = blogData.get({plain: true});
            res.render('edit', {
                layout: 'dashboard',
                blog
            });
        } else {
            res.status(404).end();
        }
    } catch (err) {
        res.redirect('/login');
    }
});

// create a new blog page
router.get('/create', withAuth, (req, res) =>  {
    res.render('newBlog', {
        layout: 'dashboard'
    })
})

// view a single blog
router.get('/aBlog/:id', withAuth, async (req, res) => {
    try {
        // console.log("you made it")
        const blogData = await Blog.findByPk(req.params.id);
        // get comments for blogid
        const commentData = await Comment.findAll({
            where: {
                blog_id: req.params.id
            }
        });
        // console.log(commentData)
        if (blogData) {
            const blog = blogData.get({plain: true});
            let comments = [];
            let names = [];
            for (let i= 0; i < commentData.length; i++) {
                let comment = commentData[i].get({plain: true});
                comment.name = await User.findByPk(commentData[i].user_id)
                comments.push(comment);
                // console.log(commentData[i].get({plain: true}))
            }
            // console.log(comments[0].name.dataValues.name)
            // get user id from blog and comments
            blog.user = await User.findByPk(blog.user_id)
            // console.log(blog.user.dataValues.name)
            res.render('aBlog', {
                layout: 'main',
                blog,
                comments
            });
        } else {
            res.status(404).end();
        }
    } catch (err) {
        console.log(err)
        res.redirect('/login');
    }
})

// post a comment
router.get('/aBlog/comment/:id', withAuth, (req, res) => {
    // takes blog id
    // posts a comment to the database
    // 

});


module.exports = router;