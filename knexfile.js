require('dotenv').config();
const path = require("path");

const {
  DATABASE_URL = "postgresql://postgres@localhost/postgres",
} = process.env;

// const {
//   DATABASE_URL = "postgres://wqppssim:XmxfihTgkbI00PZcDiUG85UuCnXJt03P@queenie.db.elephantsql.com:5432/wqppssim",
//   DATABASE_URL_DEVELOPMENT = "postgres://wqppssim:XmxfihTgkbI00PZcDiUG85UuCnXJt03P@queenie.db.elephantsql.com:5432/wqppssim",
//   DATABASE_URL_TEST = "postgres://wqppssim:XmxfihTgkbI00PZcDiUG85UuCnXJt03P@queenie.db.elephantsql.com:5432/wqppssim",
//   DATABASE_URL_PREVIEW = "postgres://wqppssim:XmxfihTgkbI00PZcDiUG85UuCnXJt03P@queenie.db.elephantsql.com:5432/wqppssim",
//   DEBUG,
// } = process.env;

module.exports = {
  development: {
    client: "postgresql",
    connection: DATABASE_URL,
    pool: { min: 0, max: 5 },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },

  production: {
    client: "postgresql",
    connection: DATABASE_URL,
    pool: { min: 0, max: 5 },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },

  test: {
    client: "sqlite3",
    connection: {
      filename: ":memory:",
    },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    useNullAsDefault: true,
  },
};
