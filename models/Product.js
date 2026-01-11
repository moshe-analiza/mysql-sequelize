import sequelize from "../db.js";
import { DataTypes } from "sequelize";
const Product = sequelize.define("Product", {
    price: {
        type: DataTypes.INTEGER,
    },
    description: {
        type: DataTypes.STRING
    },
    title: {
        type: DataTypes.STRING
    }
}, {
    tableName: "products",
});
await Product.sync()
export { Product }