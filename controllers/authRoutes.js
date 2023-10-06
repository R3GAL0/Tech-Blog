const router = require('express').Router();
const {Blog} = require('./../models');
const withAuth = require('../utils/auth.js');


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

router.get('/create', withAuth, (req, res) =>  {
    res.render('newBlog', {
        layout: 'dashboard'
    })
})


module.exports = router;