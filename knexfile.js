module.exports = {

    development: {
      client: 'mysql2', 
      connection: {
        host : 'localhost',
        port: "3306",
        user : 'root',
        password : '',
        database : 'padaria_poo',
        timezone: '+03:00',
      },
      migrations: {
        tableName: 'migrations',
        directory: './src/database/migrations'
      }
    },
  

    production: {
      client: 'mysql2',
      connection: {
        host : 'mysql746.umbler.com',
        port: "41890",
        user : 'pooii2022',
        password : '2022pooii',
        database : 'padaria_poo',
        timezone: '+03:00'
      },
      migrations: {
        tableName: 'migrations',
        directory: './src/database/migrations'
      }
    }
  };