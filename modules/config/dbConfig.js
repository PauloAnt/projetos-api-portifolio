import Sequelize from "sequelize";
import dotenv from "dotenv";

dotenv.config();
const env = process.env;

const sequelize = new Sequelize(env.DB_NAME, env.DB_USERNAME, env.DB_PASSWORD, {
    host: env.DB_HOST,
    dialect: 'mysql',
    port: env.DB_PORT,
    logging: console.log,
    define: {
        freezeTableName: true,
        timestamps: false,
    },
})

export async function connectDB(){
    try{
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}


export default sequelize;