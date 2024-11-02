import { DataTypes } from "sequelize";
import sequelize from "../../config/dbConfig.js";
import User from "../User/User.js"

const Project = sequelize.define(
    'Project',{
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        description:{
            type: DataTypes.STRING,
            allowNull: false
        },
        link:{
            type: DataTypes.STRING,
        },
        img:{
            type: DataTypes.STRING,
        },
        created:{
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },

        userId:{
            type: DataTypes.INTEGER,
            references: {
                model: User,
                key: "id"
            },
            onDelete: 'CASCADE'
        }

    }
)

export default Project;