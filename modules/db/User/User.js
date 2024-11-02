import { DataTypes } from "sequelize";
import sequelize from "../../config/dbConfig.js";

const User = sequelize.define(
    'User',{
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        username:{
            type: DataTypes.STRING,
            allowNull: false
        },

        email:{
            type: DataTypes.STRING,
            allowNull: false
        },

        password:{
            type: DataTypes.STRING,
            allowNull: false
        },

        typeUser:{
            type: DataTypes.ENUM('admin', 'common'),
            allowNull: false,
            defaultValue: 'common'
        }
    }
);

export default User;