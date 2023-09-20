const { Router } = require('express');
const UserService = require('../service/UserService');

const userRouter = Router()

const userService = new UserService();

userRouter.get('/', async (req, res) => {
    const users = await userService.getUsers()

    if(!users)
        res.sendStatus(204)

    res.status(200).send(users)
})

userRouter.post('/', async (req, res) => {
    const { nome, email, senha } = req.body;

    const user = await userService.registerUser({ nome, email, senha })

    res.status(201).send(user)
})

userRouter.post('/login', async (req, res) => {
    const { email, senha } = req.body;

    const login = await userService.login({ email, senha })

    if(!login)
        res.sendStatus(401)

    res.status(200).send(login)
})

module.exports = userRouter