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



module.exports = router;