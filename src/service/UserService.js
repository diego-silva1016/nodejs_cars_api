const UserRepository = require('../repository/UserRepository.js')
const UserModel = require('../model/UserModel.js')
const { ApiError } = require('../helper/errors.js');
const jwt = require('jsonwebtoken')
var bcrypt = require('bcryptjs');


class UserService {
  constructor() {
    this.userRepository = new UserRepository()
  }

  getUsers = async () => {
    return await this.userRepository.getUsers()
  }

  registerUser = async ({ nome, email, senha }) => {
    const hashedPassword = bcrypt.hashSync(senha)

    return await this.userRepository.registerUser(new UserModel(nome, email, hashedPassword))
  }

  login = async ({ email, senha }) => {
    const user = await this.userRepository.getUserByEmail(email)

    if(!user)
      throw new ApiError("Usuário não cadastrado")

    const checkedPassword = bcrypt.compareSync(senha, user.senha)

    if (!checkedPassword)
      throw new ApiError("Usuário e/ou senha inválido")

    var tokenJWT = jwt.sign({ id: user.id },
      process.env.NODE_SECRET_KEY, {
      expiresIn: 3600
    })

    delete user.senha

    return {
      ...user,
      token: tokenJWT
    }
  }
}

module.exports = UserService