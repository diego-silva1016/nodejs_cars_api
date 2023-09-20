const knex = require('../database/config')

class CarRepository {
  getCars = async () => await knex('cars').select('*')

  getCarById = async (carId) => await knex('cars').where({
    id: carId
  }).first()

  addCar = async (car) => {    
    return await knex('cars').insert({...car}).returning('*').then(([carInserted]) => carInserted)
  }

  editCar = async (car) => {
    return await knex('cars').where({
      id: car.id
    }).update({ ...car  })
    .returning('*')
    .then(([carEdited]) => carEdited)
  }

  deleteCar = async(carId) => {
    await knex('cars').where({
      id: carId
    }).del()
  }
}

module.exports = CarRepository