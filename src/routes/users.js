const express = require('express')
const router = express.Router();
const User = require('../models/user');

//get all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

//get user
router.get('/:id', getUser, (req, res) => {
    res.send(req.user)
})

//Create new user
router.post('/signup', async (req, res) => {
    const user = new User({
        name: req.body.name,
        username: req.body.username, 
        password: req.body.password
    })
    try {
        const newUser = await user.save()
        res.status(201).json(newUser)
    } catch (err) {
        res.status(400).json({message: err.message})
    }

})
//Update User
router.patch('/:id', getUser, async (req, res) => {
    if (req.body.name !=null) {
        res.user.name = req.body.name
    }
    if (req.body.username != null) {
        res.user.username = req.body.username
    }
    if (req.body.password != null) {
        res.user.password = req.body.password
    }
    try {
        const updatedUser = await res.user.save()
        res.json(updatedUser)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
    
})
//Delete User
router.delete('/:id', getUser, async (req, res) => {
    try {
        await res.user.remove()
        res.json({message: 'User Deleted Successfully'})
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

async function getUser(req, res, next) {
    let user
    try {
        user = await User.findById(req.params.id)
        if (user == null) {
            return res.status(404).json({message: 'Cannot find User'})
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
    res.user = user;
    next()
}
module.exports = router;