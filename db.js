// db.js
import { Sequelize } from 'sequelize';
import { createConnection } from 'mysql2/promise';
import { config } from 'dotenv';
config();

const sequelize = new Sequelize(
    process.env.DB_NAME || "riddles",
    process.env.DB_USER || "root",
    process.env.DB_PASS || "",
    {
        dialect: 'mysql',
        logging: false,
        port: Number(process.env.DB_PORT) || 3306,
        host: process.env.DB_HOST || "localhost",
    },
);
sequelize.sync();
sequelize.authenticate().then(() => {
    console.log("Connect to DB");
}).catch(err => {
    console.log("ERR connect to db: ", err);
})


async function syncDB() {
    try {
        const connection = await createConnection({
            host: process.env.DB_HOST || "localhost",
            user: process.env.DB_USER || "root",
            password: process.env.DB_PASS || "",
        });
        const [data] = await connection.query(`CREATE DATABASE IF NOT EXISTS \`${process.env.DB_NAME || "riddles"}\`;`)
        console.log(`Database ${process.env.DB_NAME || "riddles"} created or already exists.`);
    } catch (err) {
        console.log(err);
    }
}

export default sequelize;