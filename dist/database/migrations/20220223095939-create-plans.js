"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = {
    up: (queryInterface) => {
        return queryInterface.createTable("Plans", {
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            nombre: {
                type: sequelize_1.DataTypes.STRING
            },
            maxConnect: {
                type: sequelize_1.DataTypes.INTEGER
            },
            maxTime: {
                type: sequelize_1.DataTypes.INTEGER
            },
            maxUsers: {
                type: sequelize_1.DataTypes.INTEGER
            },
            createdAt: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: false
            },
            updatedAt: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: false
            }
        });
    },
    down: (queryInterface) => {
        return queryInterface.dropTable("Plans");
    }
};
