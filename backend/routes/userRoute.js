import express from 'express'
import User from '../models/userModel'
import { getToken, isAuth } from '../utils';

const router = express.Router();


router.put('/:id', isAuth, async (req, res) => {
    const userId = req.params.id;
    const user = await User.findById(userId);
    if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        user.password = req.body.password || user.password;
        const updatedUser = await user.save();
        res.json({
            _id: updatedUser.id,
            name: updatedUser.name,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin,
            token: getToken(updatedUser),
        });
    } else {
        res.status(404).json({ message: 'User Not Found' });
    }
});


router.post('/signin', async (req, res) => {
    const signinUser = await User.findOne({
        email: req.body.email,
        password: req.body.password
    });
    if (signinUser) {
        return res.json({
            _id: signinUser.id,
            name: signinUser.name,
            email: signinUser.email,
            isAdmin: signinUser.isAdmin,
            token: getToken(signinUser),
        })
    }
    else {
        res.status(401).json({ msg: 'Invalid Email or password' })
    }
})

router.post('/signup', async (req, res) => {
    try {
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            isAdmin: false
        })
        const userExist = await User.findOne({
            email: req.body.email
        });
        if (!userExist) {
            const newCreatedUser = await user.save()
            if (newCreatedUser) {
                res.json({
                    _id: newCreatedUser.id,
                    name: newCreatedUser.name,
                    email: newCreatedUser.email,
                    isAdmin: newCreatedUser.isAdmin,
                    token: getToken(newCreatedUser),
                })
            }
        } else if (userExist) {
            res.status(401).json({ msg: 'User already exist' })
        }

        else {
            res.status(401).json({ msg: 'Invalid User Data' })
        }


    } catch (error) {
        res.json({ msg: error.message })
    }
})


router.get("/createadmin", async (req, res) => {
    try {
        const user = new User({
            name: "Oparaugo Melody Ifeanyi",
            email: "melodyleonard7@gmail.com",
            password: process.env.PASSWORD,
            isAdmin: true
        })

        const newUser = await user.save()
        res.json(newUser)
    } catch (error) {
        res.json({ msg: error.message })
    }
})

export default router