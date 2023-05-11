'use strict';
const sql = require('mssql/msnodesqlv8');
const dbConfig = {
  server: '(localdb)\\MSSQLLocalDB',
  user: 'MsAws1',
  password: 'mahimahi7',
    options : {
      database: 'FileDb',
      driver: 'msnodesqlv8',
      trustedConnection : true,
      encrypt: true, // Use this option if you're connecting to an Azure SQL database
  },
};

module.exports.hello = async (event) => {
  try {
    // Establish the database connection
    //await sql.connect(dbConfig);
    const pool = new sql.ConnectionPool(dbConfig);
    console.log('Connected to MSSQL database');
    pool.connect().then(() => {
        //simple query
        pool.request().query('CREATE TABLE UserProfile(name varchar(20), Location varchar(20), UId int)', (err, result) => {
              if(err) console.log(res.send(err))
              else{
                return {
                  statusCode: 200,
                  body: 'Connection to MSSQL database successful',
                };
              }
          })
          sql.close();
          console.log('Disconnected from MSSQL database');
    })

    
    

    
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: 'Error connecting to MSSQL database',
    };
  }

    // Your code to process and store user information goes here

  //   // Close the database connection
  //   await sql.close();

  //   // Return a successful response if needed
  //   return {
  //     statusCode: 200,
  //     body: 'User information stored successfully',
  //   };
  // } catch (error) {
  //   // Handle any errors that occurred during the database connection or processing
  //   console.error('Error:', error);
  //   // Return an error response if needed
  //   return {
  //     statusCode: 500,
  //     body: 'An error occurred while storing user information',
  //   };
};

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };

