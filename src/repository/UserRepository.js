const knex = require('../database/config')

class UserRepository {
  getUsers = async () => {    
    return await knex('user').select('id', 'nome', 'email')
  }

  getUserByEmail = async (email) => {    
    return await knex('user').where({
      email
    }).first()
  }

  registerUser = async (user) => {    
    return await knex('user').insert({...user}).returning('*').then(([userInserted]) => userInserted)
  }
}

module.exports = UserRepository