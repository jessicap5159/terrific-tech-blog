const Sequelize = require('sequelize');

require('dotenv').config();  

// const mysql = require('mysql2');
// const connection = mysql.createConnection(
//     {
//     host: 'localhost',
//     user: 'root',
//     password: "macaroni123",
//     database: '???'
//   },
//   console.log('Connected to the ??? database')
//   );

  // create connection to our db
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  });

//   connection.connect(function(err) {
//       if(err) throw err; 
//   })

//   module.exports = connection;
  module.exports = sequelize;