import {Sequelize} from 'sequelize'

export const sequelize = new Sequelize('shop', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql', /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
  });
