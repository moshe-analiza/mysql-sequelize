// db.js
import { Sequelize } from 'sequelize';
import { createConnection } from 'mysql2/promise';
import { config } from 'dotenv';
config();
await syncDB();
const sequelize = new Sequelize("riddles", "root", "", {
    dialect: "mysql",
    host: "localhost",
    logging: false
})

sequelize.sync(); 
sequelize.authenticate().then(() => {
    console.log("Connect to DB");
}).catch(err => {
    console.log("ERR connect to db: ", err);
})


async function syncDB() {
    try {
        const connection = await createConnection({
            host: "localhost",
            user: "root",
            password: "",
        });
        const [data] = await connection.query(`CREATE DATABASE IF NOT EXISTS \`${"riddles"}\`;`)
        console.log(`Database ${"riddles"} created or already exists.`);
    } catch (err) {
        console.log(err);
    }
}

export default sequelize;