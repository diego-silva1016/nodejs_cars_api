// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './temp/app.db'
    }
  },

  production: {
    client: 'pg',
    connection: {
      connectionString: process.env.PG_CONNECT,
      ssl: true,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
