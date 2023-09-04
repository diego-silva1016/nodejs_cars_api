const CarRepository = require('../repository/CarRepository.js')
const CarModel = require('../model/CarModel.js')

class CarService {
  constructor() {
    this.carRepository = new CarRepository()
  }

  getCars = async () => await this.carRepository.getCars()

  getCarById = async (carId) => await this.carRepository.getCarById(carId)

  addCar = async ({ modelo, ano, placa }) => {
    const car = new CarModel(
      modelo,
      ano,
      placa
    )

    return await this.carRepository.addCar(car)
  }

  editCar = async (car) => {
    return await this.carRepository.editCar(car)
  }

  deleteCar = async (carId) => {
    await this.carRepository.deleteCar(carId)
  }
}

module.exports = CarService