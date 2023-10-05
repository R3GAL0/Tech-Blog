const router = require('express').Router();
const {Blog, User} = require('./../models');

router.get('/', async (req, res) => {
    // render blog posts here from memory
    const blogData = await Blog.findAll({
        include: [User]
    })
    console.log(blogData)
    // blog data has values
    const blogs = blogData.map((blog) => {
        return blog.get({plain:true})
    });
    console.log(blogs)
    // blogs is undefined
    res.render('home', {
        blogs
    })
})

// router.get('/dashboard', (req, res) => {
//     res.render('dashboard');
// })

router.get('/login', (req, res) => {
    res.render('login');
})

router.get('/signup', (req, res) => {
    res.render('signup');
})

module.exports = router;