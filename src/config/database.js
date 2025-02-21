const path = require('path');

module.exports = {
  dialect: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "devburger",
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
  migrationStorageTableName: "sequelize_meta",
  seederStorageTableName: "sequelize_data",
  migrationStorage: "json",
  migrations: {
    path: path.resolve(__dirname, "../database/migrations"),
    pattern: /\.js$/,
  },
  seederStorage: "sequelize",
  seederStoragePath: path.resolve(__dirname, "../database/seeders"),
};
