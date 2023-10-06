
const router = require('express').Router();
const {Blog} = require('../../models');
const withAuth = require('../../utils/auth');

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

// add a blog post
//add a comment to a blog post
// edit a blog


module.exports = router;

// view a post -> see comments, add comment