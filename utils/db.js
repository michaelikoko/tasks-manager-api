const Sequelize = require("sequelize");
const { DATABASE_URL } = require("./config");
const { Umzug, SequelizeStorage } = require("umzug");

const sequelize = new Sequelize(DATABASE_URL);

const connectToDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connection established successfully.");
  } catch (error) {
    console.log("Unable to connect to the database:", error);
    return process.exit(1);
  }
  return null;
};

const migratorConfig = {
  migrations: {
    glob: "migrations/*.js",
  },
  storage: new SequelizeStorage({ sequelize, tableName: "SequelizeMeta" }), // Store performed migration files
  context: sequelize.getQueryInterface(),
  logger: console,
};

const runMigrations = async () => {
  await sequelize.authenticate();
  const migrator = new Umzug(migratorConfig);

  const migrations = await migrator.up();
  console.log("Migrations up to date", {
    files: migrations.map((mig) => mig.name),
  });
};

const undoMigrations = async () => {
  await sequelize.authenticate();
  const migrator = new Umzug(migratorConfig);

  const migrations = await migrator.down();
  console.log("Migrations reverted", {
    files: migrations.map((mig) => mig.name),
  });
};

module.exports = {
  connectToDB,
  sequelize,
  runMigrations,
  undoMigrations,
};
