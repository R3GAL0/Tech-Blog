
const router = require('express').Router();
const {Blog, Comment} = require('../../models');
const withAuth = require('../../utils/auth');

// edit a blog post
router.put('/:id', withAuth, async (req, res) => {
    try {
        console.log('Message: ' + req.body)
        const [editedBlog] = await Blog.update(req.body, {
            where: {
                id: req.params.id,
            },
        })
        if (editedBlog > 0) {
            res.status(200).end();
        } else {
            res.status(404).end();
        }

    } catch (err) {
        res.status(500).json(err);
    }
})


//delete a blog post
router.delete('/:id', withAuth, async (req, res) => {
    try {
        console.log('Message: ' + req.body)
        const [editedBlog] = await Blog.destroy({
            where: {
                id: req.params.id,
            },
        })
        if (editedBlog > 0) {
            res.status(200).end();
        } else {
            res.status(404).end();
        }

    } catch (err) {
        res.status(500).json(err);
    }
})

// make a new blog post
router.post('/create', withAuth, async (req, res) => {
    const text = req.body;
    try {
        const newBlog = await Blog.create({
            ...text,
            user_id: req.session.user_id,
        })
        console.log(newBlog)
        res.json(newBlog)

    } catch (err) {
        res.status(500).json(err);
    }
})

//add a comment to a blog post
router.post('/comment', withAuth, async (req,res) => {
    try {
        console.log("inside post route")
        const newComment = await Comment.create({
            text: req.body.text,
            blog_id: req.body.blog,
            user_id: req.session.user_id,
        })
        // console.log(newComment)
        res.json(newComment)

    } catch (err) {
        res.status(500).json(err);
    }

});


module.exports = router;
