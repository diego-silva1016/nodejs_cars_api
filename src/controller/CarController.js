const { Router } = require('express');
const CarService = require('../service/CarService');

const carRouter = Router()

const carService = new CarService();

carRouter.get('/', async (req, res) => {
    const cars = await carService.getCars()

    res.status(200).send(cars)
})

carRouter.get('/:id', async (req, res) => {
    const car = await carService.getCarById(parseInt(req.params.id))

    if(!car)
        res.sendStatus(204)

    res.status(200).send(car)
})

carRouter.post('/', async (req, res) => {
    const car = await carService.addCar({...req.body})

    res.status(201).send(car)
})

carRouter.put('/:id', async (req, res) => {
    const car = await carService.editCar({id: parseInt(req.params.id) ,...req.body})  

    res.status(200).send(car)
})

carRouter.delete('/:id', async (req, res) => {
    await carService.deleteCar(parseInt(req.params.id))

    res.status(202).send()
})

module.exports = carRouter