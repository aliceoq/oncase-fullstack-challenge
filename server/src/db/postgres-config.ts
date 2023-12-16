import pg from "pg";
import * as dotenv from "dotenv";

dotenv.config();

/* const pool = new Pool({
  connectionString: process.env.CONNECTION_STRING,
}); */

const client = new pg.Client(process.env.CONNECTION_STRING);
client.connect(function (err) {
  if (err) {
    return console.error("Could not connect to postgreSQL", err);
  }
  client.query('SELECT NOW() AS "theTime"', function (err, result) {
    if (err) {
      return console.error("Error running query", err);
    }
    console.log(result.rows[0].theTime);
  });
});

export { client as pool };
