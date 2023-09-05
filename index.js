const express = require('express');
const cors = require('cors');
const CarService = require('./service/CarService.js');

const app = express();

const carService = new CarService();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/carros', async (req, res) => {
    const cars = await carService.getCars()

    res.status(200).send(cars)
})

app.get('/carros/:id', async (req, res) => {
    const car = await carService.getCarById(parseInt(req.params.id))

    if(!car)
        res.sendStatus(204)

    res.status(200).send(car)
})

app.post('/carros', async (req, res) => {
    const car = await carService.addCar({...req.body})

    res.status(201).send(car)
})

app.put('/carros/:id', async (req, res) => {
    const car = await carService.editCar({id: parseInt(req.params.id) ,...req.body})  

    res.status(200).send(car)
})

app.delete('/carros/:id', async (req, res) => {
    await carService.deleteCar(parseInt(req.params.id))

    res.status(202).send()
})

app.listen(process.env.PORT || 3001, () => {
  console.log(`Express server initialized ${process.env.PORT || 3001}`);
});
