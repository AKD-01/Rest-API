const Pool = require("pg").Pool;

const Pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "students",
  password: "password",
  port: 5432,
});

module.exports = Pool;
