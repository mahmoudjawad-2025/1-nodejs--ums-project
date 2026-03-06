import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
  }
);

export const connectionDB = () => {
  sequelize.sync({ force: false })
    .then(() => {
      console.log('Database connection established!');
    }).catch((error) => {
      console.error('Unable to connect to the database, error :', error.stack);
    });
};

