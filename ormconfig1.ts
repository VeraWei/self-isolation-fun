require('dotenv').config();

const localConnectionOptions = {
  type: 'mysql',
  host: 'localhost',
  username: process.env.LOCAL_USERNAME,
  password: process.env.LOCAL_PASSWORD,
  database: process.env.LOCAL_DATABASE,
  entities: ["dist/**/**.entity{.ts,.js}"],
  port: 3306,
  synchronize: false,
  autoLoadEntities: true,
};

const onlineConnectionOptions = {
  type: 'mysql',
  host: process.env.ONLINE_HOST,
  username: process.env.ONLINE_USERNAME,
  password: process.env.ONLINE_PASSWORD,
  database: process.env.ONLINE_DATABASE,
  entities: ['dist/**/*.entity{.ts,.js}'],
  port: 3306,
  synchronize: true,
  autoLoadEntities: true,
  logging: false,
};

module.exports =
  process.env.NODE_ENV === 'DEVELOPMENT'
    ? localConnectionOptions
    : onlineConnectionOptions;
