import { Client } from "pg";

// Creating a new instance of the Client with a connection string for the PostgreSQL database.
// const pgClient = new Client(
//   "postgresql://neondb_owner:npg_4lAr5asfVMLQ@ep-little-haze-azi241hm-pooler.c-3.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require",
// );

const pgClient2 = new Client({
  user: "neondb_owner", // Username for authentication
  password: "npg_4lAr5asfVMLQ", // Password for authentication
  port: 5432, // Port number for the database server
  host: "ep-little-haze-azi241hm-pooler.c-3.ap-southeast-1.aws.neon.tech", // Database server host
  database: "neondb", // Database name to connect to
  ssl: true, // Enabling SSL for secure communication
});

async function main() {
  await pgClient2.connect();
  // await pgClient2.query(`
  //       CREATE TABLE users (
  //           id SERIAL PRIMARY KEY,
  //           username VARCHAR(50) UNIQUE NOT NULL,
  //           email VARCHAR(255) UNIQUE NOT NULL,
  //           password VARCHAR(255) NOT NULL,
  //           created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
  //       );
  //   `);
  // console.log("Users table created");

  // await pgClient2.query(`
  //       INSERT INTO users (username, email, password)
  //       VALUES ('Rohan Dev', 'rohan@gmail.com', '123456789')
  //   `);

  // SQL query to update the password of a user based on the given email condition.
  //  const response = await pgClient2.query(`
  //       UPDATE users SET password = '12345789'
  //       WHERE id = '1'; 
  //   `);

  
    await pgClient2.query(`
        DELETE FROM users
        WHERE id = 1;
    `);

  // const response = await pgClient2.query(`
  //       SELECT * FROM users;
  //   `);

  // Logging the response, which contains all rows from the 'users' table.
  // console.log(response.rows);
}

main();
