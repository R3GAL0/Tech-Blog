const router = require('express').Router();
const {User} = require('../../models');

// signup
router.post('/', async (req, res) => {
  try {
    const userData = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    });
    console.log(userData);
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.email = userData.email;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }


});

router.post('/login', async (req, res) => {
    try {
      // Find the user who matches the posted e-mail address
      const userData = await User.findOne({
        where: { email: req.body.email }
      });
      // console.log(userData.dataValues.password);
      if (!userData) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      // Verify the posted password with the password store in the database
      // check password malfunction. It doesnt return true for valid pw
      // if user email is seeded email use basic check
      // console.log(req.body.password)
      let validPassword = userData.checkPassword(req.body.password);
      
      console.log(validPassword);
      if (!validPassword) {
        console.log("invalid pw")
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      // Create session variables based on the logged in user
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
        
        res.json({ user: userData, message: 'You are now logged in!' });
      });
  
    } catch (err) {
      console.log(err)
      res.status(400).json(err);
    }

})


module.exports = router;