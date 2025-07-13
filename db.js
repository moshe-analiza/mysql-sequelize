// db.js
import { Sequelize } from 'sequelize';
import { config } from 'dotenv';
config();

const sequelize = new Sequelize(
    process.env.DB_NAME || "riddles",
    process.env.DB_USER || "root",
    process.env.DB_PASS || "", {
    dialect: 'mysql',
    logging: false,
}
);
sequelize.authenticate().then(() => {
    console.log("Connect to DB");
}).catch(err => {
    console.log("ERR connect to db: ", err);
})
export default sequelize;
